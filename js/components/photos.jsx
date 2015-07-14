"use strict";

var React = require("react");

var PhotoListItem = React.createClass({
	getInitialState: function() {
		return {
			checked: this.props.checked
		};
	},
	render: function() {
		console.log(this.props);
		return (
			<li>
				<label htmlFor={"img" + this.props.keys}><img src={this.props.imgsrc} className="img-responsive" /></label>
				<input checked={this.state.checked} className="img-chk" id={"img" + this.props.keys} type="checkbox"/>
			</li>
		);
	}
});

module.exports = React.createClass({
	render: function() {
		var photoList = [];
		this.props.photos.forEach(function(photo, index) {
			photoList.push(<PhotoListItem checked={photo.checked} keys={photo.id} imgsrc={photo.src}/>);
		});
		return (
			<ul className="list-unstyled">
				{photoList}
			</ul>
		);
	}
});