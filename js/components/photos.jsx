"use strict";

var React = require("react");

module.exports = React.createClass({
	render: function() {
		var photoList = [];
		this.props.photos.forEach(function(photo) {
			photoList.push(<li><input id="imgid" type="checkbox"/><label htmlFor="imgid">Hacked while flying.</label></li>);
		});
		return (
			<ul className="list-unstyled">
				{photoList}
			</ul>
		);
	}
});