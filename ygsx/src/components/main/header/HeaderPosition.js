

import React,{Component} from 'react';

export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className="address">
				<span>北京</span>
				<i className="fa fa-sort-down (alias)"></i>
			</div>
		)
	}
}
