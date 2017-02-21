var React = require('react');

var WeatherForm = React.createClass({
    getWeather: function (e) {
        console.log('haha')
        e.preventDefault()
    },
    render: function () {
        return (
            <form onSubmit={this.getWeather}>
                <div>
                    <input type="text" placeholder="Enter city name" ref="city"/>
                </div>
                <div>
                    <button>Get Weather</button>
                </div>
            </form>
        );
    }
});

module.exports = WeatherForm;