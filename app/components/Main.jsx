var React = require('react');
var Navigation = require('Navigation');

var Main = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation/>
                <h1>Main Component!!</h1>
            </div>
        );
    }
});

module.exports = Main;