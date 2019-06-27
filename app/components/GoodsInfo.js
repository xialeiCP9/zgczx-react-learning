import React from "react";
import {connect} from "react-redux";

import "../css/style.less";

class GoodsInfo extends React.Component{
	constructor(props){
		super();
	}
	render(){
		return (
				<div className="section">
					<div className="section-header">
						<i></i>
						产品相关
					</div>
					<h3 className="product-name">
						<a href="javascript:;">{this.props.goodsName}</a>
					</h3>
					<p className="links">
						<a href="javascript:;">综述</a>
						<em>|</em>
						<a href="javascript:;">参数</a>
						<em>|</em>
						<a href="javascript:;">报价</a>
						<em>|</em>
						<a href="javascript:;">点评</a>
						<em>|</em>
						<a href="javascript:;">评测</a>
						<em>|</em>
						<a href="javascript:;">论坛</a>
					</p>
				</div>
		)
	}
}

export default GoodsInfo;