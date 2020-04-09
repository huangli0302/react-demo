import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import { connect } from 'react-redux'
import { changeInputAction } from './../../store/actionCreators.js'
class StoreDemo extends Component {
  componentWillMount(){
      //console.log(this.context);  
  }
  componentDidMount(){
    console.log(this.context); 
  }
  render() { 
    return (
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              {this.props.orderType}
            </p>
          </header>
        </div>
    );
  }
  
}
 
const mapStateToProps = (state, ownProps) => ({ // mapStateToProps,将组件的props和state中的数据关联起来
  orderType: state.orderReducer.orderType,
}) 
const mapDispatchToProps = { // mapDispatchToProps， 将组件的事件和action关联起来
  changeInputAction
}

export default connect(mapStateToProps,mapDispatchToProps)(StoreDemo)  // connect接受mapStateToProps， mapDispatchToProps
