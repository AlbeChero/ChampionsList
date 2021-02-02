import React from "react";
import '../index.css'

class BoxChampion extends React.Component {

   render() {
       var nome = this.props.champion.id;
       var title = this.props.champion.title;
       var upperTitle = title.charAt(0).toLowerCase() + title.slice(1);

       var image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + nome + '_0.jpg';
       return (
            <div className="boxChamp" key={this.props.champion.id}>
                <div className="champName">{this.props.champion.id}: {upperTitle}</div>
                <img src={image} alt={this.props.champion.id}></img>
                <div className="champTitle"></div>
            </div>
       );
   }
}

export default BoxChampion;