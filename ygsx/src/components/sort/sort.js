


import React,{Component} from 'react'
import Footer from '../footer'


export default class Sort extends Component {

	constructor(props){
		super(props)
		this.state = {
		}
	}



	render(){
		let {pathname} = this.props.location
		return(
			<div>
				分类
               <Footer pathname={pathname} />
            </div>
        )
	}
}
