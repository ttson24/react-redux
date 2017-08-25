'use strict'
import React,{Component} from 'react';
import List from 'List';
import {connect} from 'react-redux';
import {removeItem} from './action/action';

class Note extends Component{

removeNote(){
  var {index, dispatch} = this.props;
  dispatch(removeItem(index));

}
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button className="btn btn-default"
        onClick={this.removeNote.bind(this)}>Delete</button>
      </div>
    )
  }
}

module.exports = connect()(Note);
