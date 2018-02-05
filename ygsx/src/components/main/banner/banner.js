

import React,{Component} from 'react'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default class Nav extends Component{
			
	constructor(props){
		super(props)
		this.state={
				
		}
	}	
	componentDidUpdate(){
		var mySwiper = new Swiper ('.swiper-container', {
			loop: true,
			autoplay:true,
			pagination: {
				el: '.swiper-pagination',
			},
		})        
    }		
		
	
	
	render(){
		let data = this.props
		let str = data?data.data["0"]:""
		console.log(str)
		console.log(Swiper)
		return (
			<div className="banner-box">
				<div className="swiper-container ">
					<div className="swiper-wrapper">
						{
							str?str.carouselPictures.map(item=>(
								<div className="swiper-slide" key={item.id}>
									<img alt="" src={item.pictureUrl}/>
								</div>
							)):""
						}
					</div>
					<div className="swiper-pagination"></div>
				</div>
				{
					str?str.adPictures.map(item=>(
						<div className="screen_banner" key={item.id}>
							<img alt="" src={item.pictureUrl}/>
						</div>
					)):""
				}
			</div>
		)
	}
}
