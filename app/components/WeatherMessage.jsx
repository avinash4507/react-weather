var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h5>it is {temp} degrees in {location}</h5>
    );
};

module.exports = WeatherMessage;