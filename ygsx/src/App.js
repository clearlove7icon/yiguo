import React, { Component } from 'react';
import { connect } from 'react-redux'
import action from './redux/actions'

class App extends Component {

  componentDidMount() {
    //初始加载页面，购物车获取数据
    this.props.initCars()
  }

  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

export default connect(state=>state,dispatch=>{
  return {
    initCars: action.initCars
  }
})(App);
