import React from "react";
import { format } from "morgan";
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataState: null };
  }
  render() {
    return (
      <div id="home_page">
        {this.state.dataState}
        {/* <a
          id="login"
          href="http://localhost:5000/login"
          style={{ display: this.state.dataState !== null ? "none" : "block" }}
        >
          Log In
        </a>
        <a
          id="logout"
          href="http://localhost:5000/logout"
          style={{ display: this.state.dataState !== null ? "block" : "none" }}
        >
          Log Out
        </a> */}
      </div>
    );
  }

  componentDidMount() {
    fetch("https://pro-organiser1.firebaseio.com/auth.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data) {
          let ds = (
            <a id="logout" href="http://localhost:5000/logout">
              Log Out
            </a>
          );
          let userinfo = Object.values(data)[0].profile;
          this.setState({ dataState: ds });
          this.props.authHandler();
          this.props.infoHandler(userinfo);
        } else {
          let ds = (
            <a id="login" href="http://localhost:5000/login">
              Log In
            </a>
          );
          this.setState({ dataState: ds });
        }
      });
  }
}

export default Auth;
