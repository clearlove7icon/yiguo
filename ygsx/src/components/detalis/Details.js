import React, { Component } from 'react';
import Banner from './Details-Banner.js';
import Bottom from './Details-Bottom.js';
import Content from './Details-Content.js';
import axios from 'axios';

class Details extends Component {
	constructor(context, props) {
		super(context, props)
		this.state = {
			data: []
		}
	}

	componentWillMount() {
    let that = this
    axios.get('./json/details.json').then((res) => {
			that.setState({data:res.data})
		})
	}

	render() {
		var {data} = this.state
		return (
			<div className="details">
				{
					data[0]? 
					<Banner data={data} />
					:''
				}
				{
					data[0]? 
					<Content data={data} />
					:''
				}
				{
					data[0]? 
					<Bottom data={data} />
					:''
				}
		</div>
		);
  }
}


export default Details;
