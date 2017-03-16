var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navigation = React.createClass({
    onWeatherSearch: function (e) {
        e.preventDefault();
        alert('haha')
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
                            <li><input type="search" placeholder="Search Weather"/></li>
                            <li><input type="submit" className="button" value="Get Weather"/></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
});

module.exports = Navigation;
