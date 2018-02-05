


import React,{Component} from 'react'

import Footer from '../footer'

export default class Mine extends Component {

	constructor(props){
		super(props)
		this.state = {
		}
	}



	render(){
		 let {pathname} = this.props.location
		return(
			<div>
				我的
               <Footer pathname={pathname} />
            </div>
        )
	}
}
