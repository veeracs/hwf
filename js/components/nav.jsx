"use strict";

var React = require("react");

module.exports = React.createClass({
	componentWillReceiveProps: function(nextProps) {
		this.setState({appId: nextProps.appId});
	},
	getInitialState: function() {
		return {appId: "", logo: "https://cnee.condenastdigital.com/images/registration/" + this.props.appId + "Logo.png"};
	},
	render: function() {
		console.log(this.props);
		return (
			<div className="row">
				<div className="col-lg-12">
					<div className="page-header logo">
						<img className="img-responsive" src={this.state.logo} />
					</div>
				</div>
			</div>
		);
	}
});