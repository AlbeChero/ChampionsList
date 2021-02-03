import React from "react";
import '../index.css';
import {Link} from "react-router-dom";

class BoxChampion extends React.Component {

   render() {
       var champName = this.props.champion.id;
       var title = this.props.champion.title;
       var lowerTitle = title.charAt(0).toLowerCase() + title.slice(1); //First letter of the title lowered

       var image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + champName + '_0.jpg';
       return (
            <div className="boxChamp" key={champName}>
                <Link to={`${champName.toLowerCase()}`}><div className="champName">{champName}: {lowerTitle}</div></Link>
                <img src={image} alt={champName}></img>
                <div className="champTitle"></div>
            </div>
       );
   }
}

export default BoxChampion;