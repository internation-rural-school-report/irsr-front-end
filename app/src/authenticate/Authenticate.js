import React from "react";
import Login from "./Login";

const Authenticate = App =>
  class extends React.Component {
    state = {
      loggedIn: false
    };

    componentDidMount() {
      if (!localStorage.getItem('jwt')) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) return <App />;
      
      return  <Login />;
    }
  };

export default Authenticate;
