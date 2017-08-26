'use strict'
import actionType from '../util/actionType';

function addItem(item){
  return{type:actionType.ADD_ITEM, item}
}

function removeItem(index){
  return {type:actionType.REMOVE_ITEM, index}
}

function toggle(){
  return {type:actionType.TOGGLE_IS_ADDING}
}

module.exports = {addItem, removeItem, toggle};
