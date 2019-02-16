import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Error extends Component {


  render() {
    return (

      <div className="error-server">
        URL INCORRECT, <p/> WE HAVE AN ERROR, TRY AGAIN.
      </div>
    );
  }
}

export default Error;