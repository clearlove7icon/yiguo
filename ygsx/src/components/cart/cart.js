


import React,{Component} from 'react'
import Footer from '../footer'


export default class Cart extends Component {

	constructor(props){
		super(props)
		this.state = {
		}
	}



	render(){
		let {pathname} = this.props.location
		return(
			<div>
				购物车
               <Footer pathname={pathname} />
            </div>
        )
	}
}
