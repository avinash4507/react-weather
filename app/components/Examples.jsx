var React = require('react');
var {Link} = require('react-router');

var Examples = props => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are few examples to try out!!</p>
            <ol>
                <li>
                    <Link to="/?location=delhi">Delhi</Link>
                </li>
                <li>
                    <Link to="/?location=haryana">Haryana</Link>
                </li>
            </ol>
        </div>
    );
};

module.exports = Examples;