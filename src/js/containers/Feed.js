import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Feed extends Component {

  constructor() {
    super()
    this.state = {};
  }

  // function to get data
  // getData() {
  //  call api
  // }

  componentDidMount() {
    // this.getData();
  }

  render() {
    return (
      <div>
        Feed should be here
        <Link to='/'>
          Link to login
        </Link>
      </div>
    );
  }
}

export default Feed;