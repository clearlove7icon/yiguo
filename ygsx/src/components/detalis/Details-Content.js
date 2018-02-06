import React, { Component } from 'react';
import axios from 'axios';

import { connect } from 'react-redux'
import actions from '../../redux/actions'
import add_number from '../../redux/ActionCreators/add_number'
import reduce_number from '../../redux/ActionCreators/reduce_number'

class Content extends Component {

	constructor(context, props) {
		super(context, props)
		this.state = {
			recommend: []
		}
	}

	componentWillMount() {
    let that = this
    axios.get('./json/details-recommend.json').then((res) => {
			that.setState({recommend: res})
		})
	}
	render() {
	let {data} = this.props
	let {recommend} = this.state
    return (
		<div className="contents">
			{
				data.map((item, index) => (
					<div className="content" key="index">
						<div className="shop-title">
							<h4>{item.CommodityName}/个</h4>
							<p><span>{item.PromotionTag}</span>{item.DeliveryTips}</p>
							<div><span>￥{item.CommodityPrice}<strong>￥{item.OriginalPrice}</strong></span><i>产地:{item.PlaceOfOrigin}</i></div>
							<p>{item.CanNoReasonToReturnText}</p>
						</div>
						<div className="sales">
							<p>促销</p>
							<p><span>{item.CommodityPromotions[0].PromotionTypeText}</span>{item.CommodityPromotions[0].PromotionTitle}</p>
							<p><span>{item.CommodityPromotions[1].PromotionTypeText}</span>{item.CommodityPromotions[1].PromotionTitle}</p>
						</div>
						<div className="number">
							<div>规格
							{
								item.Speces[0]?
							<span>{item.Speces[0].Spec}</span>
							:''
							}
							</div>
							<div>数量<div><span onClick={this.props.reduceNumber}>-</span><strong>{this.props._num}</strong><span onClick={this.props.addNumber}>+</span></div></div>
						</div>
						<div className="site">
							<span>送至</span>
							<div>
								<p>{item.ShippingAddress}</p>
								<p><span>有货</span><span>[限时配]</span><span>仅限每周二配送</span></p>
							</div>
						</div>
					</div>
				))
			}
			<div className="recommend">
				<p>大家都在买</p>
				<div className="recommend-content">
					{
						recommend.data ? recommend.data.map(item => (
							<div key={item.CommodityCode} className="swiper-slide">
								<img src={item.SmallPic} />
								<div>
									<p>{item.CommodityName}</p>
									<p>
										<span>￥{item.CommodityPrice}</span>
										<i onClick={this.props.addGood.bind(null,item)} className="iconfont">&#xe657;</i>
									</p>
								</div>
							</div>
						)) : ''
					}
				</div>
			</div>
			<div className="button">
				查看图文详情>
			</div>
		</div>
    );
  }
}

let mapStateToProps = (state) => {
	return {
		_num: state.num,
		cars: state.cars
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addNumber() {
			// dispatch===store.dispatch
			dispatch(add_number())
		},
		reduceNumber() {
			dispatch(reduce_number())	
		},
		addGood: actions.addGood
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);
