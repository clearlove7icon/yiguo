


import React,{Component} from 'react'

import Header from './header/Header'

import Banner from './banner/Banner'

import Nav from './nav_box/Nav'

import Content from './content/content'

import Footer from '../footer'

import axios from 'axios'

import {ListView} from 'antd-mobile'

export default class Main extends Component {

	constructor(props){
		super(props)
		this.state = {
			data:[]
		}
	}

	componentWillMount(){
		let that = this
		axios.post("/api/Template/GetTemplate",
			{
				Area:{
						Code:2,
						DId:"c8d9363c-fc0a-4f7b-9a18-3aedbbc83e57",
						DName:"海淀区",
						Default:0,
						Id:"eabbe02f-59e0-46e6-90e7-cd8a89dbb98f",
						Name:"北京",
						Version:"2.0"
				},
				Channel:5,
				token:""	
			},
		)
		.then(function ({data}) {
			/* if (res.data.isSuccessful) {
				that.setState({data:res.data.data.template.componentList})
				console.log(that.data)
			}else{
				console.log(res)
			}		    */
			console.log(data)
			that.setState({data:data.data.template.componentList})
		})
	}


	render(){
		let {pathname} = this.props.location
		let {data} = this.state;
		console.log(data)
		return (
			<div className='wrap'>
				<Header />
				<Banner data={data}/>
				<Nav data={data} />
				<Content data={data}/>
				<Footer pathname={pathname} />
			</div>
		)
	}
}
