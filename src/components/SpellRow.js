import React from "react";
import '../index.css'

function strip_html_tags(str) {
    str = str.toString();
    return str.replace(/<[^>]*>/g, '');
 }
 
 function SpellRow(props) {

    function onChangeSpellFocus() {
        props.changeSpellOnClick(props.buttonSpell);
    }
 
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
 
     videoSpell = <div className="videoContainer"><video controls src={urlVideo} type="video/web"/></div>
 
     var classe;
     if(props.buttonSpell === props.spellFocus) {
         classe = "spellContainerGold";
     } else classe = "spellContainer";
      
     return(
             <div key={props.spell.id} className={classe} onClick={onChangeSpellFocus}>
                 {typeSpell}
                 <div className="spellDescription">{strip_html_tags(props.spell.description)}</div>
                 <div className="spellImg"><img src={img} /></div>
                 {/*{videoSpell} */}
             </div>
     );
 }

 export default SpellRow;