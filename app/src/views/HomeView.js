import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getIssues} from '../actions/HomeActions';
import axios from 'axios';
import {Link} from 'react-router-dom'; 


  class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    this.props.getIssues();
  }

  render() {
    return (
     <div>
         <h1></h1>
     </div>
    );
  }
} 



const mapStateToProps = (state, ownProps) => {
  return { 
      items: state.home.items,
      pending: state.home.pending
  };
}

export default connect(mapStateToProps, { getIssues})(HomeView);
