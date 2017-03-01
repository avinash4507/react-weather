var React = require('react');

var WeatherForm = React.createClass({
    getWeather: function (e) {
        e.preventDefault()
        var location = this.refs.location.value;
        if (location.length > 0) {
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },
    render: function () {
        return (
            <div>
                <form onSubmit={this.getWeather}>
                    <div>
                        <input type="text" placeholder="Enter city name" ref="location"/>
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;