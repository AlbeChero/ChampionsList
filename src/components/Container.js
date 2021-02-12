import React from 'react';
import Header from "./Header";
import BoxChampion from './BoxChampion';
import ChampionDetail from './ChampionDetail';
import '../index.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function translationRoles(word) {
    word = word.toLowerCase();
    if(word === 'assassino') {
        return 'assassin';
    } else if(word === 'tank') {
        return 'tank';
    } else if(word === 'supporto') {
        return 'support';
    } else if(word === 'tiratore') {
        return 'marksman'
    } else {
        return 'fighter';
    }
}

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            champions: [],
            search: '',
            itemMenu : 'Tutti'
        };
        this.onChangeSearch = this.onChangeSearch.bind(this);
        this.mainPageContent = this.mainPageContent.bind(this);
        this.setItemMenu = this.setItemMenu.bind(this);
    }

    setItemMenu(word) {
        this.setState({
            itemMenu: word,
            search: ''
        })
    }

    onChangeSearch(word) {
        this.setState({
            search: word,
            itemMenu: 'Tutti'
        });
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
            if(this.state.itemMenu === 'Tutti') {
                if(champ.id.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1) {
                    return;
                }
                result.push(
                    <BoxChampion champion={champ} key={champ.id} />
                );
            } else {

                const filterTag = translationRoles(this.state.itemMenu);
                const arrayTags = champ.tags;
                var foundIt = false;
                console.log(filterTag);

                for(var i=0; i < arrayTags.length; i++) {
                    if(arrayTags[i].toLowerCase() === filterTag) {
                        foundIt = true;
                    }
                }

                if(foundIt === true) {
                    result.push(
                        <BoxChampion champion={champ} key={champ.id} />
                    );
                }
            }
        })

        return(
            <div className="container">
                <Header search={this.state.search} onChangeResearch={this.onChangeSearch} 
                itemMenu={this.state.itemMenu} setItemMenu={this.setItemMenu}/>
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