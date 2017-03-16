var React = require('react');

var WeatherMessage = ({temp, location}) => {
    return (
        <h5 className="text-center">it is {temp} degrees in {location}</h5>
    );
};

module.exports = WeatherMessage;