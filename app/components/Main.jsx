var React = require('react');
var Navigation = require('Navigation');

var Main = props => {
    return (
        <div>
            <Navigation/>
            <h1>Main Component!!</h1>
            {props.children}
        </div>
    );
};

module.exports = Main;