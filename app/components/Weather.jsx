var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var OpenWeather = require('OpenWeather');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState() {
        return {isLoading: false}
    },
    weatherSeach(location) {
        this.setState({isLoading: true, errorMessage: undefined, location: undefined, temperature: undefined})
        OpenWeather
            .getTemp(location)
            .then(res => {
                this.setState({location: location, temperature: res, isLoading: false})
            }, error => {
                this.setState({isLoading: false, errorMessage: error.message})
            })
    },
    componentDidMount: function () {
        let location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.weatherSeach(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps) {
        let location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.weatherSeach(location);
            window.location.hash = '#/';
        }
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
                return (<ErrorModal message={errorMessage}/>);
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.weatherSeach}/> {renderMessage()}
                {renderErrorMessage()}
            </div>
        );
    }
});

module.exports = Weather;