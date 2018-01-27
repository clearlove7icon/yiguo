

import React,{Component} from 'react';

export default class Header extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='search-box'>
				<i className="fa fa-search"></i>
				<input type='text'/>
			</div>
		)
	}
}
