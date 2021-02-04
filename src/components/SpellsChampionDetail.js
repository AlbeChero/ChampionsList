import React from "react";
import '../index.css'

function SpellRow(props) {
    return(
        <div key={props.id}>
           {props.spellName}
        </div>
    );
}

class SpellsChampionDetail extends React.Component {
    constructor(props) {
        super(props);
        this.generateSpellsList = this.generateSpellsList.bind(this);
    }

    generateSpellsList() {
        console.log(this.props.spells[0]);
        return this.props.spells.map(spell => spell.map(spl => <SpellRow key={spl.name} id={spl.id} spellName={spl.name}/>))
    }

    render() {
        return(
            <div >{this.generateSpellsList()}</div>
        )
    }
}

export default SpellsChampionDetail;