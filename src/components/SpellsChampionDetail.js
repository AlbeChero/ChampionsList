import React from "react";
import '../index.css';
import SpellRow from './SpellRow';
import SpellVideo from './SpellVideo';

class SpellsChampionDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spellFocus : 'P'
        };
        this.generatePassiveAndSpellsList = this.generatePassiveAndSpellsList.bind(this);
        this.changeSpellFocus = this.changeSpellFocus.bind(this);
    }

    changeSpellFocus(spellLetter) {
        this.setState({
            spellFocus: spellLetter
        })
    }

    generatePassiveAndSpellsList() {
        var passiveAndSpells = [];
        var button = ['Q', 'W', 'E', 'R'];
        var i = 0;
        passiveAndSpells.push(this.props.passive.map(pass => 
                            <SpellRow key={pass.name} 
                            spell={pass} 
                            passive={true} 
                            champKey={this.props.champKey}
                            spellFocus={this.state.spellFocus}
                            buttonSpell={'P'}
                            changeSpellOnClick={this.changeSpellFocus}
                            />));

        passiveAndSpells.push(this.props.spells.map(spell => spell.map(spl => 
                            <SpellRow key={spl.name} 
                                      spell={spl} 
                                      passive={false}  
                                      champName={this.props.nameChamp} 
                                      champKey={this.props.champKey} 
                                      buttonSpell={button[i++]}
                                      spellFocus={this.state.spellFocus}
                                      changeSpellOnClick={this.changeSpellFocus}
                                      />)));
        return passiveAndSpells;
    }

    render() {
        return(
            <div className="passiveSpellsVideoContainer">
                <div className="spellsAndPassive">{this.generatePassiveAndSpellsList()}</div>
                <div className="videosContainer">
                    <SpellVideo champKey={this.props.champKey} spellFocus={this.state.spellFocus}/>
                </div>
            </div>
        )
    }
}

export default SpellsChampionDetail;