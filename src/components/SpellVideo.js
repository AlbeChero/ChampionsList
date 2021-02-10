import React from 'react';
import '../index.css'

class SpellVideo extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){

    const keyLength = Number(this.props.champKey).toString().length
    var keyString;
     
    if(keyLength === 1) {
        keyString = '000' + Number(this.props.champKey).toString();
    } else if(keyLength === 2) {
        keyString = '00' + Number(this.props.champKey).toString();
    } else {
        keyString = '0' + Number(this.props.champKey).toString();
    }

    var urlVideo = "https://d28xe8vt774jo5.cloudfront.net/champion-abilities/" + keyString + "/ability_" + keyString + "_" + this.props.spellFocus + "1.webm";

        return(
            <div className="videos">
                <video controls autoPlay src={urlVideo} type="video/web" poster="../images/logo-not-found.png" />
            </div>
        );
    }
}

export default SpellVideo;