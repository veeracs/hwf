"use strict";

var React = require("react");
var PhotosList = require("./photos.jsx");
var AppConfig = require("../config");

module.exports = React.createClass({
	componentWillReceiveProps: function(nextProps) {
		this.setState({appId: nextProps.appId});
	},
	componentDidMount: function() {
		console.info("API calls URI:::" + AppConfig.envs[this.props.hostname]);
		//	get initial state from a store
		var dataUrl = AppConfig.envs[this.props.hostname] + "?userID=" + this.props.userId;
		var photos = [];
		$.get(dataUrl, function(result) {
			console.log("Instagram images selected from the Conde repo...");
			console.log(result);
			self.condeContributor = result;
			//	var userId = result.data[0].orig.user.id || result.data[0].contributor.id;
			if (result.data) {
				result.data.forEach(function(user) {
					photos.push({id: user._id ,src: user.orig.images.standard_resolution.url, checked: true});
				});
				self.condeContributor.data.forEach(function(imgObj) {
					imgObj.rights.hasRights = true;
				}.bind(this));
				this.setState({
					appName: AppConfig.apps[this.props.appId].name,
					photos: photos
				});
			}
		}.bind(this));
	},
	getInitialState: function() {
		return {
			appId: "",
			appName: "",
			logo: "https://cnee.condenastdigital.com/images/registration/" + this.props.appId + "Logo.png",
			photos: [],
			apiUrl: AppConfig.envs[this.props.hostname]
		};
	},
	socialLogin: function(evt) {
		self.condeContributor.data.forEach(function(imgObj) {
			console.log(imgObj.rights.hasRights);
		}.bind(this));
		//	call the OAuth.io API here
		//	console.log(evt.target.value);
		console.log(this.state.apiUrl);
		OAuth.popup('instagram').done(function(result) {
			console.log(result);
			var instaUser = {
				accessToken: result.access_token,
				id: result.user.id,
				fullname: result.user.full_name,
				username: result.user.username
			};
			if (instaUser.id === this.props.userId) {
				//	IMP:::DO NOT DO THIS IN PROD, no time setting up flux pattern
				self.instaUser = instaUser;
				document.location.href = "#/" + this.props.appId + "/" + this.props.userId + "/2";
			} else {
				// display error message user is not authorized
				alert("Instagram user " + instaUser.id + " cannot issue rights for the photos. Please login with a different Instagram user account.");
			}
			//	document.location.href = "#/app/traveler/user/cveera/step2";
			//	TODO: make API call
		}.bind(this)).fail(function() {
			//todo when the OAuth flow failed
		});
	},
	render: function() {
		return (
			<div className="row">
				<div className="col-lg-12">
					<h4 className="tagline">We Love Your Photos</h4>
					<hr className="underline" />
					<p className="tagline-st">Yes! I would like to become a <span className="company-name">Condé Nast Digital Contributor</span> and have my photos featured on <b>{this.state.appName}</b></p>
					<PhotosList photos={this.state.photos} />
					<p><a className="btn btn-primary btn-lg btn-social" onClick={this.socialLogin}><i className="fa fa-instagram"></i> <span className="btn-social-txt">Login to Instagram to confirm</span></a></p>
					<p><a href="">No, I don't want to be famous.</a></p>
				</div>
			</div>
		);
	}
});