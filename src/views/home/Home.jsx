import React, { Component } from 'react';
import { Button } from 'antd'
import Router from "./../../router/index"
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time:'1'
        };
        
    }
    test(data){
        //console.log(data);
        data.history.push('/Home/StoreDemo');
        console.log(data);
    }
    test1(data){
        data.history.push('/Home/User');
    }
    test2(data){
        data.history.push('/Home/Test');
    }
    render() { 
        const data=this.props;
        //console.log(data);
        return (
            <div>   
             <Button type="primary" onClick={this.test.bind(this,data)}>Button</Button>
             <Button type="dashed" onClick={this.test1.bind(this,data)}>Button</Button>
             <Button onClick={this.test2.bind(this,data)}>Button</Button>
             <div>
                <Router/>
             </div>
             
            </div>
        );
    }
}
 
export default Home;