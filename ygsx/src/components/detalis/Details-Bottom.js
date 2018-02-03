import React, { Component } from 'react';
import { Link } from 'react-router';

import { connect } from 'react-redux'
import actions from '../../redux/actions'

class Bottom extends Component {
	render() {
		let {data} = this.props
    return (
    	<div className="bottom">
    		<div>
					<div>
						<div>
		      		<i className="iconfont">&#xe607;</i>
							<span>首页</span>
			      </div>
						<div>
							<Link to={'mycart'}>
								<i className="iconfont">&#xe66e;
								<span className="mui-badge mui-badge-danger">{this.props.carlen()}</span></i>
								<span>购物车</span>
							</Link>
			      </div>
					</div>
					{
						data.map((item) => (
							<div onClick={this.props.addGood.bind(null,item)} key={item.CommodityCode}>加入购物车</div>
						))
					}
    		</div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
	return {
		cars: state.cars,
		carlen:()=>{
			let len = 0
			state.cars.forEach(good=>{
				len+=good.num
			})
			return len
		}
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		addGood: actions.addGood
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Bottom);
