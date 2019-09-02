import React, { Component } from 'react'
import './style.css';

export default class Submit extends Component {
  render() {
    return (
        <div className="stars__footer">
          <p className="stars__footer--text">
            Is there anyone else you would want us to add ?
          </p>
          <a href="localhost:3000" className="stars__footer--link">Submit a Name</a>
        </div>
    )
  }
}
