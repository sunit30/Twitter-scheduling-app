import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form/Form";
import Auth from "./components/Auth/Auth";

import Dashboard from "./components/Dashboard/Dashboard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDash: false, inf: null };
    this.passtoDash = this.passtoDash.bind(this);
  }

  authHandler = () => {
    this.setState({ showDash: true });
  };
  passtoDash(info) {
    this.setState({ inf: info });
  }
  render() {
    return (
      <div>
        <Auth
          authHandler={this.authHandler}
          infoHandler={this.passtoDash}
        ></Auth>
        <Dashboard
          showDash={this.state.showDash}
          info={this.state.inf}
        ></Dashboard>
      </div>
    );
  }
}

export default App;
