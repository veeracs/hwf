"use strict";

var React = require("react");
var PhotosList = require("./photos.jsx");


OAuth.initialize('bStFoAQd9oLThShC_E8gjb-hRbA', 'Ks5CdDeFdjuvSvRm41uePy_E51o');

module.exports = React.createClass({
	componentWillReceiveProps: function(nextProps) {
		this.setState({appId: nextProps.appId});
	},
	componentDidMount: function() {
		//	get initial state from a store
		this.setState({
			photos: [
				{id: "123", src: "http://google.com/images/image1.gif"},
				{id: "234", src: "http://google.com/images/image2.gif"}
			]
		});
	},
	getInitialState: function() {
		return {
			appId: "",
			logo: "https://cnee.condenastdigital.com/images/registration/" + this.props.appId + "Logo.png",
			photos: []
		};
	},
	socialLogin: function(evt) {
		//	call the OAuth.io API here
		//	console.log(evt.target.value);
		OAuth.popup('instagram').done(function(instagram) {
			instagram.me().done(function(me) {
				//	console.log('Your name is ' + me.name)
			})
		}).fail(function() {
			//todo when the OAuth flow failed
		});
	},
	render: function() {
		return (
			<div className="row">
				<div className="col-lg-12">
					<h4 className="tagline">We Love Your Photo(s)</h4>
					<p>Yes! I would like to become a Condé Nast digital contributor and have my photo featured on </p>
					<PhotosList photos={this.state.photos} />
					<p><a onClick={this.socialLogin}>Login to Instagram to confirm</a></p>
					<p><a href="">No, I don't want to be famous.</a></p>
				</div>
			</div>
		);
	}
});