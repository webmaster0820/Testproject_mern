import React, {Component} from "react";
import "./PortfolioCard.css";

const createMarkup = require("../../utils/library.js").createMarkup;

class PortfolioCard extends Component{
	render(){
		return(
			<div className="portfolio-slick-padding">
				<div className="card">
					<div className="card-image">
						<img src={this.props.img} alt="" />
					</div>
					<div className="card-content">
						<a href={this.props.urlDemo} target="_blank"><h5 className="no-top-margin"><strong className="indigo-text darken-4" dangerouslySetInnerHTML={createMarkup(this.props.title)}></strong></h5></a>
						<div className="small-bottom-margin" dangerouslySetInnerHTML={createMarkup(this.props.description)}></div>
						<div className="wrap-x-overflow row no-bottom-margin small-top-margin">
						<div className="clearFloat" />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default PortfolioCard;