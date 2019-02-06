import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
 
  }

  render() {
    return (
     <div>
         <h1>hi</h1>
     </div>
    );
  }
} 


