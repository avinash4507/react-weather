var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    onWeatherSearch: function (e) {
        e.preventDefault();
        let location = this.refs.search.value;
        let encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            window.location.hash = `#/?location=${encodedLocation}`;
            this.refs.search.value = '';
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React Weather App</li>
                        <li>
                            <IndexLink
                                to="/"
                                activeClassName="active"
                                activeStyle={{
                                fontWeight: 'bold'
                            }}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                activeClassName="active"
                                activeStyle={{
                                fontWeight: 'bold'
                            }}>About</Link>
                        </li>
                        <li>
                            <Link
                                to="/examples"
                                activeClassName="active"
                                activeStyle={{
                                fontWeight: 'bold'
                            }}>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onWeatherSearch}>
                        <ul className="menu">
                            <li><input type="search" placeholder="Enter city name" ref="search"/></li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
