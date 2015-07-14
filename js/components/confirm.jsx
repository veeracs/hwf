"use strict";

var React = require("react");
var AppConfig = require("../config");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<h4 className="tagline">We'll email you a link to your photo as soon as it's posted, along with official <span className="company-name">Condé Nast</span> Contributor badge.</h4>
				</div>
				<div className="col-xs-12">
					<p>FOLLOW US</p>
				</div>
			</div>
		);
	}
});