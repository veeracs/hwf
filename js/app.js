"use strict";

var React = require("react");
var View = require("./view.jsx");
var Nav = require("./components/nav.jsx");


module.exports = React.createClass({
	render: function() {
		return (
			<div className="container-fluid hwf-container-fluid"><Nav appId={this.props.params.appId} userId={this.props.params.userId} path={this.props.path}/><View appId={this.props.params.appId} userId={this.props.params.userId}/></div>
		);
	}
});