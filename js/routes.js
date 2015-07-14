"use strict";

var React = require("react");
var Router = require("react-router");
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require("./app");
var Step1 = require("./components/step1.jsx");

var routes = (
		<Route name="app" path="/" handler={App}><Route name="step1" path="/app/:appId/user/:userId/step1" handler={Step1} /></Route>
	);

module.exports = routes;