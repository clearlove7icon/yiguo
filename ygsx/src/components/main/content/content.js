

import React,{Component} from 'react'

import GroupOne from './group_one'
import GroupTwo from './group_two'
import GroupThree from './group_three'
import GroupFour from './group_four'
import TypeList from './typeList'


export default class Content extends Component{
			
	constructor(props){
		super(props)
		this.state={
		
		}
	}	


		
	
	
	render(){
		let data = this.props
		
		console.log(data)
        return (
			<div>
				<GroupOne data={data}/>
				<GroupTwo data={data}/>
				<GroupThree data={data}/>
				<GroupFour data={data}/>
				<div className="image">
					<a href="###">
						<img src="//img11.yiguoimg.com/d/items/2018/180123/9288718412882999_1125x408.jpg?w=1125&h=408"/>
					</a>
				</div>
				<TypeList data={data}/>
			</div>
        )
	}
}
