"use strict";

var React = require("react");
var AppConfig = require("../config");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<h4 className="tagline confirm-thq">Thank You!</h4>
					<hr className="underline" />
					<p className="tagline-st tagline-st-confirm">We will email you a link to your photo on <a href={"http://" + AppConfig.apps[this.props.appId].site} target="blank">{AppConfig.apps[this.props.appId].site}</a> as soon as it's featured, so you can start sharing with your family and fans!</p>
				</div>
				<div className="col-xs-12">
					<p><img src="/images/social.gif" className="img-responsive social-icons" /></p>
				</div>
			</div>
		);
	}
});