import React, {Component, PropTypes} from 'react';
require("./Tab.css");
export default class Tab extends Component{
	constructor(props){
		super(props);
		this.state = {
			selected:this.props.selected
		}
	}
	handleClick(e){
		this.setState({selected:e.target.getAttribute("data-value")})
	}
	render(){
		const options = this.props.options;
		return(
			<ul className="m-nav">
				{
					options.map((item,i)=>
						<li key={i} className={this.state.selected == i?'on':''}><a href="#" onClick={this.handleClick.bind(this)} data-value={i} >{item.name}</a></li>
					)
				}
			</ul>
		)
	}
}
