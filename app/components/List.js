'use strict'
import React,{Component} from 'react';
import Note from 'Note';
import NoteForm from 'NoteForm';
import {connect} from 'react-redux';

class List extends Component{

  render(){
    return (
      <div>
        <NoteForm />
        {this.props.data.map((e,i)=><Note
          key={i}
          index={i}
          >{e}</Note>)}
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {data:state.data}
})(List);
