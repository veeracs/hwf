"use strict";

var React = require("react");
var PhotosList = require("./photos.jsx");
var AppConfig = require("../config");

module.exports = React.createClass({
	componentWillReceiveProps: function(nextProps) {
		this.setState({appId: nextProps.appId});
	},
	componentDidMount: function() {
		console.log(AppConfig.envs[this.props.hostname]);
		//	get initial state from a store
		var dataUrl = AppConfig.envs[this.props.hostname] + "?userID=" + this.props.userId;
		var photos = [];
		$.get(dataUrl, function(result) {
			console.log(result);
			var userId = result.data[0].orig.user.id || result.data[0].contributor.id;
			if (result.data) {
				result.data.forEach(function(user) {
					photos.push({id: user._id ,src: user.orig.images.standard_resolution.url, checked: true});
				});
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
			photos: []
		};
	},
	socialLogin: function(evt) {
		//	call the OAuth.io API here
		//	console.log(evt.target.value);
		OAuth.popup('instagram').done(function(result) {
			console.log(result);
			//	document.location.href = "#/app/traveler/user/cveera/step2";
		}).fail(function() {
			//todo when the OAuth flow failed
		});
	},
	render: function() {
		return (
			<div className="row">
				<div className="col-lg-12">
					<h4 className="tagline">We Love Your Photo(s)</h4>
					<p>Yes! I would like to become a <span className="company-name">Condé Nast</span> digital contributor and have my photo(s) featured on <b>{this.state.appName}</b></p>
					<PhotosList photos={this.state.photos} />
					<p><a className="btn btn-primary btn-lg btn-social" onClick={this.socialLogin}><i className="fa fa-instagram"></i> <span className="btn-social-txt">Login to Instagram to confirm</span></a></p>
					<p><a href="">No, I don't want to be famous.</a></p>
				</div>
			</div>
		);
	}
});