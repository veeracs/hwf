(function(win, doc, nav) {
	"use strict";
	//	OAuth.initialize('bStFoAQd9oLThShC_E8gjb-hRbA', 'Ks5CdDeFdjuvSvRm41uePy_E51o');
	OAuth.initialize("bStFoAQd9oLThShC_E8gjb-hRbA");
	require("../less/hwf.less");
	var React = require("react");
	var Router = require("react-router");
	var routes = require("./routes");
	//	execute callback when the route changes
	Router.run(routes, function(Handler, state) {
		React.render(<Handler path={state.path} params={state.params} />, doc.body);
	});
})(window, document, navigator);