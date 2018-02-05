

import React,{Component} from 'react';

export default class Header extends Component {

	render(){
		return (
			<div className='search-box'>
				<i className="fa fa-search"></i>
				<input type='text'/>
			</div>
		)
	}
}
