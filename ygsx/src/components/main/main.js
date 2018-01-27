


import React,{Component} from 'react'
import Header from './header/Header'
export default class Main extends Component {
	constructor(props){
		super(props)
	}
	render(){
		return (
			<div className='wrap'>
				<Header/>
			</div>
		)
	}
}
