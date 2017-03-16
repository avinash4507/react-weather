var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function () {
        var modal = new Foundation.Reveal(jQuery('#error-modal'));
        modal.open();
    },
    render: function () {
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h1>Awesome. I Have It.</h1>
                <p className="lead">Your couch. It is mine.</p>
                <p>I'm a cool paragraph that lives inside of an even cooler modal. Wins!</p>
                <button className="button hollow" data-close="" >Okay</button>
            </div>
        );
    }
});

module.exports = ErrorModal;