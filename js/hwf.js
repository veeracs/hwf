(function(win, doc, nav) {
	"use strict";
	require("../less/hwf.less");
	var React = require("react");
	var Router = require("react-router");
	var routes = require("./routes");
	//	execute callback when the route changes
	Router.run(routes, function(Handler, state) {
		React.render(<Handler path={state.path} params={state.params} />, doc.body);
	});
})(window, document, navigator);