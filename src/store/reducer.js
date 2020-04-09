import { CHANGE_INPUT, ADD_ITEM } from './actionTypes';
import { combineReducers } from 'redux'
let orderReducer=(state = {}, action) => {
  if (action.type === CHANGE_INPUT) {
    let newState = JSON.parse(JSON.stringify(state)) // 深度拷贝state
    newState.inputValue = action.value
    return newState
  }
  if (action.type === ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)  //push新的内容到列表中去
    newState.inputValue = ''
    return newState
  }
  // 其他类似操作流程...
  return state
}
export default combineReducers({ // combineReducers,合并多个reducers
    orderReducer
  })