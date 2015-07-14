"use strict";

var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require("./app");
var Step1 = require("./components/step1.jsx");
var Step2 = require("./components/step2.jsx");
var Confirmation = require("./components/confirm.jsx");

var routes = (
		<Route name="app" path="/" handler={App}><Route name="step1" path="/:appId/:userId/1" handler={Step1} /><Route name="step2" path="/:appId/:userId/2" handler={Step2} /><Route name="confirm" path="/:appId/:userId/confirmation" handler={Confirmation} /></Route>
	);

module.exports = routes;