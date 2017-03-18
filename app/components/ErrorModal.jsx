var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {title: 'Error'};
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var {title, message} = this.props;
        var modalMarkup = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h1>{title}</h1>
                <p>{message}</p>
                <button className="button hollow" data-close="">Okay</button>
            </div>
        );

        let $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal(jQuery('#error-modal'));
        modal.open();
    },
    render: function () {
        return (
            <div></div>
        );
    }
});

module.exports = ErrorModal;