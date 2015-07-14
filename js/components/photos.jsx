"use strict";

var React = require("react");

var PhotoListItem = React.createClass({
	getInitialState: function() {
		return {
			checked: this.props.checked
		};
	},
	updateRights: function(evt) {
		console.log("Clicked on image:" + this.props.keys + " " + !this.state.checked);
		this.state.checked = (this.state.checked)? false : true;
		//	modify the global object here
		console.log(self.condeContributor);
		self.condeContributor.data.forEach(function(imgObj) {
			if (imgObj._id === this.props.keys) {
				console.log("Setting image id:" + imgObj._id +  "hasRights to " + this.state.checked);
				imgObj.rights.hasRights = this.state.checked;
			}
		}.bind(this));
		this.setState({
			checked: this.state.checked
		});
	},
	render: function() {
		return (
			<li>
				<label onClick={this.updateRights} htmlFor={"img" + this.props.keys}><img src={this.props.imgsrc} className="img-responsive" /></label>
				<input checked={this.state.checked} className="img-chk" id={"img" + this.props.keys} type="checkbox"/>
			</li>
		);
	}
});

module.exports = React.createClass({
	render: function() {
		var photoList = [];
		this.props.photos.forEach(function(photo, index) {
			photoList.push(<PhotoListItem checked={photo.checked} keys={photo.id} imgsrc={photo.src}/>);
		});
		return (
			<ul className="list-unstyled">
				{photoList}
			</ul>
		);
	}
});