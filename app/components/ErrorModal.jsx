var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var modal = new Foundation.Reveal(jQuery('#error-modal'));
        modal.open();
    },
    render: function () {
        var { title, message } = this.props;
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h1>{title}</h1>
                <p>{message}</p>
                <button className="button hollow" data-close="">Okay</button>
            </div>
        );
    }
});

module.exports = ErrorModal;