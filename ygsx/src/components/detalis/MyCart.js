import React, { Component } from 'react'

import { connect } from 'react-redux'
import actions from '../../redux/actions'

class MyCart extends Component {

	render() {
		let { cars, allprice, allnum } = this.props
		console.log(cars)
		console.log(allprice)
		return (
			<div className="mycart">

				<div className="please_login">
					登录可同步购物车内商品<span>登录</span>
				</div>
				{
					cars.map(item => (
						<div className="shop" key={item.CommodityCode}>
							<div><i className="iconfont"></i></div>
							<div>
								<img alt="" src={item.Pictures} />
								<div>
									<p><span>{item.CommodityName}</span><i className="iconfont"></i></p>
									<div>
										<div>
										<span>￥{item.CommodityPrice}</span>
										<span>￥{item.OriginalPrice}</span>
										</div>
										<div>
										<span onClick={this.props.reducerGood.bind(null, item)}>-</span>
										<strong>{item.num}</strong>
										<span onClick={this.props.setGood.bind(null, item)}>+</span></div>
									</div>
								</div>
							</div>
						</div>
					))
				}
				<div className="manylike">
					<p>猜你喜欢</p>
					<div>
						<ul>
							<li>
								<img alt="" src="http://img09.yiguoimg.com/e/items/2017/170622/9288709429830358_300.jpg" />
								<div>
									<p>意大利进口Dolomia多洛米亚天然饮用水优雅款1L</p>
									<p><span>￥18</span><i className="iconfont"></i></p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				<div className="close_account">
					<div>
						<i className="iconfont"></i>
						全选
					</div>
					<div>
						<div>
						<p>合计(不含运费):<span>￥{allprice}</span></p>
							<p>已优惠:￥0.00</p>
						</div>
						<span>去结算
						<span className="mui-badge mui-badge-danger">{allnum}</span>
						</span>
					</div>
					
				</div>
			</div>
		)
	}
}

let mapStateToProps = (state) => {
	//这里获取数据
	let allprice=0, allnum = 0

	state.cars.forEach(item => {
		allprice+=item.OriginalPrice*item.num
		allnum+=item.num
	});
	return {
		cars: state.cars,
		allprice,
		allnum
	}
}

let mapDispatchToProps = (dispatch) => {
	//这里传递数据
	return {
		reducerGood: actions.reduceGood,
		setGood: actions.setGood
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);