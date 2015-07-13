"use strict";

var React = require("react");
var Step1 = require("./components/step1.jsx");
var Nav = require("./components/nav.jsx");


module.exports = React.createClass({
	render: function() {
		return (
			<div className="container-fluid hwf-container-fluid"><Nav appId={this.props.params.appId} userId={this.props.params.userId} path={this.props.path}/></div>
		);
	}
});