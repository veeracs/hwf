"use strict";

var React = require("react");
var AppConfig = require("../config");

module.exports = React.createClass({
	render: function() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<h4 className="tagline">You're almost done! Just fill out the form and submit.</h4>
					<p>You'll be credited as:</p>
					<p>Photo by <span className="social-user">@vbfdf</span></p>
					<p className="alert alert-danger collapse cn-collapse" id="errorMessages" role="alert">Server error message</p>
					<form className="form" role="form" noValidate>
						<div className="form-group">
							<input className="form-control cn-form-control" type="text" name="fullname" id="fullname" placeholder="Full Name"/>
							<div id="passwordMsg" className="alert-danger-inline hide">Full name cannot be blank</div>
						</div>
						<div className="form-group">
							<input className="form-control cn-form-control" type="email" name="emailAddress" id="emailAddress" placeholder="Email" pattern='^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$'/>
							<div id="emailAddressMsg" class="alert-danger-inline hide"></div>
						</div>
						<div className="form-group">
							<input id="usePhotos" type="checkbox" name="usePhotos" />
							<label htmlFor="usePhotos">Condé Nast can use any of my photos</label>
						</div>
						<button type="submit" className="btn cn-btn btn-primary btn-block">Submit</button>
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