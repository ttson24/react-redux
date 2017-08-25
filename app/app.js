var React = require('react');
var ReactDOM = require('react-dom');
var List = require('List');
var store = require('store');
var {Provider} = require('react-redux');

ReactDOM.render(
  <Provider store={store}>
    <List/>
    </Provider>,
  document.getElementById('root')
);
