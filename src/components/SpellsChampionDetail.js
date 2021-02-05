import React from "react";
import '../index.css'

function strip_html_tags(str) {
   str = str.toString();
   return str.replace(/<[^>]*>/g, '');
}

function SpellRow(props) {

    const keyLength = Number(props.champKey).toString().length
    var keyString;
    
    if(keyLength === 1) {
        keyString = '000' + Number(props.champKey).toString();
    } else if(keyLength === 2) {
        keyString = '00' + Number(props.champKey).toString();
    } else {
        keyString = '0' + Number(props.champKey).toString();
    }

    var img, typeSpell, videoSpell, urlVideo;

    if (props.passive) {
        img = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/" + props.spell.image.full;
        urlVideo = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/" + keyString + "/ability_" + keyString + "_P1.webm";
        typeSpell = <div className="spellName">Passiva<br/>{props.spell.name}</div>
    } else {
        img = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/" + props.spell.image.full;
        urlVideo = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/" + keyString + "/ability_" + keyString + "_" + props.buttonSpell + "1.webm";
        typeSpell = <div className="spellName">{props.champName + ' ' + props.buttonSpell}<br/>{props.spell.name}</div> 
    }

    videoSpell = <div className="videoContainer"><video controls autoPlay src={urlVideo} type="video/web"/></div>
     
    return(
        <div key={props.spell.id} className="spellContainer">
           {typeSpell}
           <div className="spellDescription">{strip_html_tags(props.spell.description)}</div>
           <div className="spellImg"><img src={img} /></div>
           {videoSpell}
        </div>
    );
}

class SpellsChampionDetail extends React.Component {
    constructor(props) {
        super(props);
        this.generatePassiveAndSpellsList = this.generatePassiveAndSpellsList.bind(this);
    }

    generatePassiveAndSpellsList() {
        var passiveAndSpells = [];
        var button = ['Q', 'W', 'E', 'R'];
        var i = 0;
        passiveAndSpells.push(this.props.passive.map(pass => <SpellRow key={pass.name} spell={pass} passive={true} champKey={this.props.champKey}/>));
        passiveAndSpells.push(this.props.spells.map(spell => spell.map(spl => 
                            <SpellRow key={spl.name} 
                                      spell={spl} passive={false}  
                                      champName={this.props.nameChamp} champKey={this.props.champKey} buttonSpell={button[i++]}/>)));
        return passiveAndSpells;
    }

    render() {
        return(
            <div>
                <div >{this.generatePassiveAndSpellsList()}</div>
            </div>
        )
    }
}

export default SpellsChampionDetail;