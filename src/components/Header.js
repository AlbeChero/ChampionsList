import React from 'react';
import '../index.css';
import logo from '../images/lol-logo.png'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleChangeSearch(event) {
        this.props.onChangeResearch(event.target.value);
    }

    render() {
        return (
            <div className="header">
                <div className="logo">
                    <img src={logo}></img>
                </div>
                <form className="search">
                    <input type="text" 
                    value={this.props.search} 
                    placeholder="Cerca campione.." 
                    onChange={this.handleChangeSearch} />
                </form>
            </div>
        );
    }
}

export default Header;