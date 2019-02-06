import React from 'react';
import './app.css'
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BoardView from './views/BoardView';
import IssueView from './views/IssueView';
import HomeView from './views/HomeView';
import Authenticate from './authenticate/Authenticate';
class App extends React.Component {
  render() {
    return (
      <div id="page-wrapper">
        <Navbar isBoard="true"/>
        <article id="main">
          <Route exact path='/' render={(props) => <HomeView {...props}/>} />
          <Route path='/home' render={(props) => <HomeView {...props}/>} />
          <Route path='/issue/:id' render={(props) => <IssueView id={props.match.params.id} {...props} />} />
        </article>
      </div>
    );
  }
}

export default Authenticate(App);
