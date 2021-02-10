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
 
     var img, typeSpell;
 
     if (props.passive) {
         img = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/passive/" + props.spell.image.full;
         typeSpell = <div className="spellName">Passiva<br/>{props.spell.name}</div>
     } else {
         img = "http://ddragon.leagueoflegends.com/cdn/11.3.1/img/spell/" + props.spell.image.full;
         typeSpell = <div className="spellName">{props.champName + ' ' + props.buttonSpell}<br/>{props.spell.name}</div> 
     }
 
     var classe;
     if(props.buttonSpell === props.spellFocus) {
         classe = "spellContainerGold";
     } else {
        classe = "spellContainer";
     } 
      
     return(
             <div key={props.spell.id} className={classe} onClick={onChangeSpellFocus}>
                 {typeSpell}
                 <div className="spellDescription">{strip_html_tags(props.spell.description)}</div>
                 <div className="spellImg"><img src={img} /></div>
             </div>
     );
 }

 export default SpellRow;