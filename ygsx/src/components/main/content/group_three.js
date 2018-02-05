

import React,{Component} from 'react'

export default class GroupOne extends Component{
			
	constructor(props){
		super(props)
		this.state={
		}
	}	


		
	
	
	render(){
        let data = this.props
        let arr = data?data.data.data[3]:''
        console.log(arr)
        return (
            <div className="content_three">
                <a href="https://ztactivity.yiguo.com/H5Activity/Index?code=20180126007&componentid=3385E2C4-60DC-4AEF-9A45-9708FB052494">                
                    <img src="//img13.yiguoimg.com/d/items/2018/180126/9288718662673466_1125x652.jpg?w=1125&h=652"/>
                </a>
                <ul>
                   {
                       arr?arr.componentCommoditys.map(item=>(
                            <li key={item.id}>
                                <div className="tag">
                                    {item.cornerPictureUrl?<img src={item.cornerPictureUrl}/>:''}
                                </div>
                                <img src={item.pictureUrl}/>
                                <span>{item.commodityName}</span>
                                <span><i>￥{item.commodityPrice}</i>{item.commoditySpec}</span>
                            </li>
                       )):""
                   }
                   <li>查看更多</li> 
                </ul>
            </div>
        )
	}
}
