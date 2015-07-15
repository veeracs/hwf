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
			email: "",
			rights: "",
			allRights: false
		}
	},
	setRights: function() {
		self.condeContributor.data.forEach(function(imgObj) {
			imgObj.contributer.email = this.state.email;
		}.bind(this));
		console.log("Set rights here and modify the payload!!!");
		var contributorData = self.condeContributor.data;
		var payload = {
			rights: "approve",
			data: contributorData
		};
		var dataUrl = AppConfig.envs[this.props.hostname];
		console.log("dataUrl: " + dataUrl);
		$.ajax({
			type: "POST",
			url: dataUrl,
			data: JSON.stringify(payload),
			success: function() {  },
			dataType: "json",
			contentType: 'application/json'
		}).done(function() {
			document.location.href = "#/" + this.props.appId + "/" + this.props.userId + "/confirmation";
		}.bind(this)).fail(function() {
			document.location.href = "#/" + this.props.appId + "/" + this.props.userId + "/confirmation";
		}.bind(this));
		return false;
	},
	updateAllRights: function(evt) {
		self.condeContributor.data.forEach(function(imgObj) {
			console.log("All rights checked" + evt.target.checked);
			imgObj.rights.allRights = (evt.target.checked)? true : false;
		});
	},
	setEmail: function(evt) {
		console.log("Email: " + evt.target.value);
		this.setState({email: evt.target.value});
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
					<hr className="underline" />
					<p>You'll be credited as:</p>
					<p>Photo by <span className="social-user">@{this.state.name}</span></p>
					<p className="alert alert-danger collapse cn-collapse" id="errorMessages" role="alert">Server error message</p>
					<form className="form" role="form" noValidate>
						<div className="form-group">
							<input className="form-control cn-form-control" type="text" name="fullname" id="fullname" value={this.state.name} placeholder="Full Name"/>
							<div id="passwordMsg" className="alert-danger-inline hide">Full name cannot be blank</div>
						</div>
						<div className="form-group">
							<input onBlur={this.setEmail} className="form-control cn-form-control" type="email" name="emailAddress" id="emailAddress" placeholder="Email" pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'/>
							<div id="emailAddressMsg" className="alert-danger-inline hide"></div>
						</div>
						<div className="form-group use-photos">
							<input id="allRights" type="checkbox" onClick={this.updateAllRights} name="allRights" />
							<label htmlFor="allRights">Condé Nast can use any of my photos</label>
						</div>
						<button type="submit" onClick={this.setRights} className="btn btn-success btn-lg btn-submit">Submit</button>
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