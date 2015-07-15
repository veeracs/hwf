"use strict";

var React = require("react");
var AppConfig = require("../config");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<h4 className="tagline confirm-thq">Thank You!</h4>
					<p className="tagline-st tagline-st-confirm">We'll email you a link to your photo as soon as it's posted, along with official <span className="company-name">Condé Nast</span> Contributor badge.</p>
				</div>
				<div className="col-xs-12">
					<p><img src="/images/social.gif" className="img-responsive social-icons" /></p>
				</div>
			</div>
		);
	}
});