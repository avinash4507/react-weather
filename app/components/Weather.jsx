var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeather = require('OpenWeather');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState() {
        return {
            isLoading: false
        }
    },
    weatherSeach(location) {
        this.setState({
            isLoading: true,
            errorMessage: undefined
        })
        OpenWeather
            .getTemp(location)
            .then(res => {
                this.setState({
                    location: location,
                    temperature: res,
                    isLoading: false
                })
            }, error => {
                this.setState({
                    isLoading: false,
                    errorMessage: error.message
                })
            })
    },
    render: function () {
        var {temperature, location, isLoading, errorMessage} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching Weather...</h3>
            } else if (temperature && location) {
                return <WeatherMessage location={location} temp={temperature}/>
            }
        }
        function renderErrorMessage() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal/>
                );
            }
        }
        return (
            <div>
                <h1 className="text-center">Get Weather</h1>
                <WeatherForm onSearch={this.weatherSeach}/>
                {renderMessage()}
                {renderErrorMessage()}
            </div>
        );
    }
});

module.exports = Weather;