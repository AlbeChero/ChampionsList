import React from 'react';
import '../index.css';
import logo from '../images/lol-logo.png'


function ItemMenu(props) {
    if(props.name === props.itemOn) {
        return <li className="menuFilterUnderLine" onClick={props.changeFilterMenu}>{props.name}</li>;
    } else {
        return <li onClick={props.changeFilterMenu}>{props.name}</li>;
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.changeFilterMenu = this.changeFilterMenu.bind(this);
    }

    changeFilterMenu(event) {
        this.props.setItemMenu(event.target.innerHTML);
    }

    handleChangeSearch(event) {
        this.props.onChangeResearch(event.target.value);
    }
    
    itemsMenu() {
        var items = ['Tutti', 'Assassino', 'Tank', 'Supporto', 'Tiratore', 'Combattente'];
        const result = [];
        var i = 0;
        items.forEach(item => result.push(<ItemMenu key={item} name={item} itemOn={this.props.itemMenu} 
                        changeFilterMenu={this.changeFilterMenu}/>));
        return result;
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <div className="search">
                    <form className="inputSearch">
                        <input type="text" 
                        value={this.props.search} 
                        placeholder="Cerca campione.." 
                        onChange={this.handleChangeSearch} />
                    </form>
                    <ul className="menuFilter">
                        {this.itemsMenu()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;