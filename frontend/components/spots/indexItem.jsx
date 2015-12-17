var React = require('react');
var History = require('react-router').History;

var SpotIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    this.history.pushState(null, 'spot/' + this.props.spot.id, {});
  },

  render: function() {
    return(
      <li className="spot-list-item" onClick={this.showDetail} key={this.props.spot.id}>
        {this.props.spot.name}
        <br/>
        Info: {this.props.spot.description}
        <br/><br/>
      </li>
    );
  },
});

module.exports = SpotIndexItem;
