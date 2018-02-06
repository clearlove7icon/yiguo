import React, { Component } from 'react'
import axios from 'axios'

import { connect } from 'react-redux'
import actions from '../../redux/actions'
import change_buy from '../../redux/ActionCreators/change_buy'

class MyCart extends Component {

	constructor(context, props) {
		super(context, props)
		this.state = {
			data: []
		}
	}

	componentWillMount() {
		let that = this
		//json文件在public中，
		axios.get('./json/details-recommend.json').then((res) => {
			that.setState({
				data: res
			})
		})
	}
//{`iconfont ${isAllBuy === true ? 'icon-font-active' : ''}`}
	render() {
		let { cars, allprice, allnum, isAllBuy } = this.props
		let {data} = this.state
		console.log(cars)
		return (
			<div className="mycart">

				<div className="please_login">
					登录可同步购物车内商品<span>登录</span>
				</div>
				{
					cars.map(item => (
						<div className="shop" key={item.CommodityCode}>
							<div><i onClick={this.props.changeBuy.bind(null, item)} className={`iconfont ${item.isBuy === true ? 'icon-font-active' : ''}`}>&#xe610;</i></div>
							<div>
								<img alt="" src={item.Pictures} />
								<div>
									<p><span>{item.isBuy}{item.CommodityName}</span><i onClick={this.props.clearCar.bind(null, item)} className="iconfont">&#xe804;</i></p>
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
						{
							data.data?data.data.map(item => (
								<li key={item.CommodityCode}>
									<img alt="" src={item.SmallPic} />
									<div>
										<p>{item.CommodityName}</p>
										<p><span>￥{item.CommodityPrice}</span><i onClick={this.props.addGood.bind(null, item)} className="iconfont">&#xe657;</i></p>
									</div>
								</li>
							)):''
						}			
						</ul>
					</div>
				</div>

				<div className="close_account">
					<div>
						<i onClick={this.props.changeAllBuy} className={`iconfont ${isAllBuy === true ? 'icon-font-active' : ''}`}>&#xe610;</i>
						全选
					</div>
					<div>
						<div>
						<p>合计(不含运费):<span>￥{parseFloat(allprice).toFixed(2)}</span></p>
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
	let allprice = 0, allnum = 0, isAllBuy = true
	
	state.cars.forEach(item => {
		allprice+=item.OriginalPrice*item.num
		allnum+=item.num
		isAllBuy=state.cars.every(function(item){
			return item.isBuy===true
		})
	});
	return {
		cars: state.cars,
		allprice,
		allnum,
		isAllBuy
	}
}

let mapDispatchToProps = (dispatch) => {
	//这里传递数据
	return {
		reducerGood: actions.reduceGood,
		setGood: actions.setGood,
		addGood: actions.addGood,
		clearCar: actions.clearCar,
		changeBuy: actions.changeBuy,
		changeAllBuy: actions.changeAllBuy
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCart);