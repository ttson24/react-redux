'use strict'
import React from "react";
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import {addItem, removeItem, toggle} from '../../app/action/action';

describe('addItem', () => {
  it('should create an action to add a new item', () => {
    const item = 'Finish docs';
    const expectedAction = {
      type: 'ADD_ITEM',
      item
    }
    expect(addItem(item)).toEqual(expectedAction)
  })
})
describe('removeItem', () => {
  it('should create an action to add a remove item', () => {
    const index = 1;
    const expectedAction = {
      type: 'REMOVE_ITEM',
      index
    }
    expect(removeItem(index)).toEqual(expectedAction)
  })
})
describe('toggle', () => {
  it('should create an action to change state add', () => {
    const expectedAction = {
      type: 'TOGGLE_IS_ADDING'
    }
    expect(toggle()).toEqual(expectedAction)
  })
})
