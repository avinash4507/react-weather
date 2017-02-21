var React = require('react');
var WeatherForm = require('WeatherForm');

var Weather = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Weather Component</h1>
                <WeatherForm/>
            </div>
        );
    }
});

module.exports = Weather;