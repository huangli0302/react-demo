import {  createStore, applyMiddleware  } from 'redux';
import reducer from './reducer' // 引入reducer
import initialState  from './state'
import thunk from "redux-thunk"  // thunk中间件，增强异步action
const enhancer = applyMiddleware(thunk)  // redux需要通过applyMiddleware来使用中间件
const store = createStore(
    reducer,
    initialState,
    enhancer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // 使浏览器中redux-devtool插件生效
  ) // 创建数据存储仓库
  export default store // 将仓库暴露出去