import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/Login/LoginForm';

class Login extends Component {

  constructor() {
    super()
    this.state = {
      input : {},
    };

    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  // function to get data
  // getData() {
  //  call api
  // }

  componentDidMount() {
    // this.getData();
  }

  _onChange(key, value){
    const {input} = this.state;
    input[key] = value;
    this.setState({input})

  }

  _onSubmit(){
    console.log("Hello");
  }

  render() {
    const {input} = this.state;
    return (
      <div>
        <LoginForm 
          input={input}
          onChange={this._onChange}
          onSubmit={this._onSubmit}
        />
        <Link to='/feed'>
          Link to feed
        </Link>
      </div>
    );
  }
}

export default Login;