

import React,{Component} from 'react'

import {Link} from 'react-router'


export default class Footer extends Component{
			
	constructor(props){
		super(props)
		this.state={
				navs:[
                    {id:1,text:'首页',icon:'home',path:'/main'},
                    {id:2,text:'分类',icon:'navicon',path:'/sort'},
                    {id:3,text:'吃饭吧',icon:'heartbeat',path:'/lunch'},
                    {id:4,text:'购物车',icon:'cart-arrow-down',path:'/cart'},
                    {id:5,text:'我的异果',icon:'user-o',path:'/mine'},
                ]
		}
	}	

		
	
	
	render(){
        let {navs} = this.state
        let {pathname} = this.props
        return (
            <footer className="footer">
				{
                  navs.map((item)=>(
                        <Link className={pathname.startsWith(item.path)?'active':''}  to={item.path} key={item.id}>
                            <i className={`fa fa-${item.icon}`}></i>
                            <span >{item.text}</span>
                        </Link>
                  ))
                }
			</footer>
        )
	
	}
}
