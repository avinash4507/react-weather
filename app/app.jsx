var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css')
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Weather}/>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
        </Route>
    </Router>
), document.getElementById('app'));