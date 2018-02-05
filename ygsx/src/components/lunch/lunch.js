


import React,{Component} from 'react'
import Footer from '../footer'


export default class Lunch extends Component {

	constructor(props){
		super(props)
		this.state = {
		}
	}



	render(){
       let {pathname} = this.props.location
		return(
			<div>
				吃饭吧
               <Footer pathname={pathname} />
            </div>
        )
		
	}
}
