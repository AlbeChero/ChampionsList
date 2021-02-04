import React from 'react';
import Header from "./Header";
import BoxChampion from './BoxChampion';
import ChampionDetail from './ChampionDetail';
import '../index.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: [],
            search: ''
        };
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.mainPageContent = this.mainPageContent.bind(this);
    }

    onChangeSearch(word) {
        this.setState({search: word});
    }

    componentWillMount() {
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

    mainPageContent() {
        const result = [];

        this.state.champions.forEach(champ => {
            if(champ.id.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1) {
                return;
            }
            result.push(
                <BoxChampion champion={champ} key={champ.id} />
            );
        })

        return(
            <div className="container">
                <Header search={this.state.search} onChangeResearch={this.onChangeSearch} />
                {result}
            </div>
        );
    }


    render() {

        return(
            <Router>
                <Route path="/" exact component={this.mainPageContent}/>
                <Route path="/:name" component={ChampionDetail} />
            </Router>
        );
    }
}

export default Container;

{/*
    {this.state.champions.map( champ => <BoxChampion champion={champ} key={champ.id}/>)} 
*/}

/*
    <div>
        {this.state.champions.map(champ => <div key={champ.id}>{champ.id}</div>)}
    </div> 
*/