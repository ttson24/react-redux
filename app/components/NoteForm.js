'use strict'
import React,{Component} from 'react';
import {connect} from 'react-redux';
import {addItem, toggle} from 'action';

class NoteForm extends Component{

  handleSubmit(event){
    event.preventDefault();
    var {dispatch} = this.props;
    dispatch(addItem(this.refs.txtName.value));
    dispatch(toggle());
  }
  toggle(){
    var {dispatch}=this.props;
    dispatch(toggle());
  }
  render(){
    if(this.props.isAdding)
    {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter text here..." ref="txtName"/>
        <button className="btn btn-default">Add</button>

      </form>
    )}
    return <button className="btn btn-default"
          onClick={this.toggle.bind(this)}>+</button>
  }
}

module.exports = connect(function(state){
  return{isAdding:state.isAdding}
})(NoteForm);
