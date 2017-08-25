'use strict'
var redux = require('redux');
var data = require('./dataReducer');
var isAdding = require('./stateReducer');

var reducer = redux.combineReducers({data,isAdding});

module.exports = reducer;
