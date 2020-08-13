import React from "react";
import { format } from "morgan";
import "./Auth.scss";
import twitterlogo from "./sign_in_twitter.png";
import toplogo from "./landing-page.png";
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataState: null };
  }
  render() {
    let lout = document.getElementById("logout");
    if (lout) {
      document.getElementById("home_page").style.backgroundColor = "black";
      //document.getElementById("home_page").style.position = "fixed";
      lout.style.backgroundColor = "black";
      lout.style.display = "block";
      lout.style.position = "fixed";
    }
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
            <div className="logout_block">
              <a id="logout" href="http://localhost:5000/logout">
                Log Out
              </a>
            </div>
          );
          let userinfo = Object.values(data)[0].profile;
          this.setState({ dataState: ds });
          this.props.authHandler();
          this.props.infoHandler(userinfo);
        } else {
          let ds = (
            <div id="login_div" href="http://localhost:5000/login">
              <div>
                <img id="toplogo" src={toplogo} alt="toplogo" />
              </div>
              <div>
                <a id="login" href="http://localhost:5000/login">
                  <img id="twitterlogo" src={twitterlogo} alt="twitter" />
                </a>
              </div>
              <div className="login_text">Lets get your account set up!</div>
            </div>
          );
          this.setState({ dataState: ds });
        }
      });
  }
}

export default Auth;
