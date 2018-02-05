

import React,{Component} from 'react';
import HeaderPosition from './HeaderPosition'
import HeaderSearch from './HeaderSearch'
export default class Header extends Component {

	render(){
		return (
			<div className="header">
				<HeaderPosition/>
				<HeaderSearch/>
			</div>
		)
	}
}
