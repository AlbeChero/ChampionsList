import React from "react";
import '../index.css'

class HeaderChampionDetail extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
                <div className="championTitles">
                    <div className="championTitle">{this.props.title}</div>
                    <div className="championName">{this.props.subTitle}</div>
                </div>
                <div className="imgChampion">
                    <img src={this.props.image} />
                </div>
            </div>
        )
    }
}

export default HeaderChampionDetail;