import React, { Component } from 'react';
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

class Banner extends Component {

	constructor(props) {
		super(props)
		this.state={
			 
		}
		
	}
	shouldComponentUpdate(props) {
		if(props.data.length===this.props.data.length){
				return false
		}else{
				return true
		}
	}

	componentDidMount() {
		new Swiper('.banner',{
				pagination: {
						el: '.banner-pagination'
						
				},
				autoplay: {
					delay: 3000,
					stopOnLastSlide: false,
					disableOnInteraction: true,
				}
		})
	}
	
  render() {
		
		let {data} = this.props
    return (
      <div className="banners">
      	<i className="iconfont exit">&#xe609;</i>
				<div className="swiper-container banner">
					<div className="swiper-wrapper">
						{
							data.map(item => (
								item.Pictures.map((item, index) => (
									<div className="swiper-slide" key={index}>
									{
										<img alt="" src={item} key={index}/>	
									}
									</div>
								))
							))
						}
					</div>
					<div className="swiper-pagination banner-pagination"></div>
			</div>
    </div>
    );
  }
}

export default Banner;
