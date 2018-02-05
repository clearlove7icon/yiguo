
import React,{Component} from 'react'


export default class Nav extends Component{

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
       let data = this.props
		let str = data?data.data["0"]:""
		console.log(str)
        return (
            <div className="nav_box">
                <ul>
                    {
                        str?str.componentNavs.map(item=>(
								<li key={item.id}>
									<i><img src={item.pictureUrl}/></i>
                                    <span>{item.navName}</span>
								</li>
							)):""
                   
                    }
                </ul>
            </div>
        )
        
    }

}