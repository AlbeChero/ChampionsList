import React from 'react';
import BoxChampion from './BoxChampion';
import '../index.css'

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: []
        };
    }

    componentDidMount() {
        fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/it_IT/champion.json')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        champions: Object.values(result.data)  
                    })
                }
            )
    }

    render() {
        return(
            /*<div>
                {this.state.champions.map(champ => <div key={champ.id}>{champ.id}</div>)}
            </div> 
            */
            <div className="container">
                {this.state.champions.map( champ => <BoxChampion champion={champ} key={champ.id}/>)}
            </div>
        );
    }
}

export default Container;