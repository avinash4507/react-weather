var React = require('react');

var WeatherMessage = React.createClass({
    render: function () {
        var {temp, location} = this.props;
        return (
            <h5>it is {temp} degrees in {location}</h5>
        );
    }
});

module.exports = WeatherMessage;