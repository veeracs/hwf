"use strict";

var React = require("react");
var AppConfig = require("../config");

module.exports = React.createClass({
	componentDidMount: function() {
		console.log("Conde Contributor Object");
		console.log(self.condeContributor);
		this.setState({
			name: self.instaUser.fullname || self.instaUser.username,
			email: ""
		});
	},
	getInitialState: function() {
		return {
			name: "",
			email: ""
		}
	},
	render: function() {
		console.log("Insta user");
		console.log(self.instaUser);
		if (!self.instaUser || (self.instaUser && !self.instaUser.accessToken)) {
			console.log("user does not exist, kick the user back to step1");
			document.location.href = "#/" + this.props.appId + "/" + this.props.userId + "/1";
		}
		return (
			<div className="row">
				<div className="col-xs-12">
					<h4 className="tagline">You're almost done! Just fill out the form and submit.</h4>
					<p>You'll be credited as:</p>
					<p>Photo by <span className="social-user">@{this.state.name}</span></p>
					<p className="alert alert-danger collapse cn-collapse" id="errorMessages" role="alert">Server error message</p>
					<form className="form" role="form" noValidate>
						<div className="form-group">
							<input className="form-control cn-form-control" type="text" name="fullname" id="fullname" value={this.state.name} placeholder="Full Name"/>
							<div id="passwordMsg" className="alert-danger-inline hide">Full name cannot be blank</div>
						</div>
						<div className="form-group">
							<input className="form-control cn-form-control" type="email" name="emailAddress" id="emailAddress" placeholder="Email" pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'/>
							<div id="emailAddressMsg" className="alert-danger-inline hide"></div>
						</div>
						<div className="form-group use-photos">
							<input id="usePhotos" type="checkbox" name="usePhotos" />
							<label htmlFor="usePhotos">Condé Nast can use any of my photos</label>
						</div>
						<button type="submit" className="btn btn-success btn-lg btn-submit">Submit</button>
					</form>
				</div>
				<footer className="row site-footer">
					<div className="col-xs-12">
						By clicking submit you agree to Condé Nast's <a href="#">full terms and conditions.</a>
					</div>
				</footer>
			</div>
		);
	}
});