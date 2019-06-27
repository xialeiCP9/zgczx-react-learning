import React from "react";
import {switchFilter} from "../actions/actions.js"

import "../css/style.less";

class ImgType extends React.Component{
	constructor({item,filter,album,myAlbum,dispatch}){
		super();
	}
	switchFilter(filter){
		this.props.dispatch(switchFilter(this.props.myAlbum,filter));
	}
	render(){
		let elem;
		if(this.props.item["filter-name"] == "颜色"){
			elem = this.props.item.filter.map((item,index) => {

				return (
					<div key={index} style={{"backgroundColor": item["type-name"]}}
						className={this.props.filter == index && this.props.album == this.props.myAlbum ? "currentColor":""}
						onClick={this.switchFilter.bind(this,index)}>
						<b></b>
					</div>
				)
			});
		} else {
			elem = this.props.item.filter.map((item,index) => {
					return (
						<a href="javascript:;" key={index} 
							className={this.props.filter == index && this.props.album == this.props.myAlbum ? "current":""}
							onClick={this.switchFilter.bind(this,index)}>
								{item["type-name"]}
						</a>
					);
			});
		}
		return (
			<div className="category-filter">
				<strong>{this.props.item["filter-name"]}:&nbsp;</strong>
				<div className="category-list">
					{
						elem
					}
				</div>
			</div>
						
		)
	}
}

export default ImgType;