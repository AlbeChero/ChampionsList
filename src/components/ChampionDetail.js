import React from "react";
import HeaderChampionDetail from "./HeaderChampDetail"; 
import SpellsChampionDetail from "./SpellsChampionDetail";
import '../index.css';

class ChampionDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            championDetail : [],
            skins : [],
            champName : props.match.params.name
        }
    }

    componentWillMount() {
        console.log('Mount');
        fetch('http://ddragon.leagueoflegends.com/cdn/11.3.1/data/it_IT/champion/' + this.state.champName + '.json')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    championDetail: Object.values(result.data)})
            })    
    } 

    render() {
        console.log(this.state.championDetail);
        const key = this.state.championDetail.map(detail => detail.key);
        const passive = this.state.championDetail.map(detail => detail.passive);
        const skins = this.state.championDetail.map(detail => detail.skins);
        const spells = this.state.championDetail.map(detail => detail.spells)
        const image = 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + this.state.champName + '_0.jpg';
        var title = this.state.championDetail.map(detail => detail.title).toString();
        const upTitle = title.charAt(0).toUpperCase() + title.slice(1);
        return(
            <div className="championContainer">
                <HeaderChampionDetail image={image} title={upTitle} subTitle={this.state.champName}/>
                <SpellsChampionDetail spells={spells} passive={passive} nameChamp={this.state.champName} champKey={key}/>
            </div>
        );
    }
}

export default ChampionDetail;