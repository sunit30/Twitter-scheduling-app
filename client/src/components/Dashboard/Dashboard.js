import React from "react";
import { format } from "morgan";
import Tl from "../Tl/Tl";
import Date from "../Date/Date";
import Queue from "../Queue/Queue";
import "../Dashboard/Dashboard.scss";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queue: null };
  }
  render() {
    var btns = document.getElementsByClassName("sidenav_div");

    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
      });
    }
    return (
      <div
        id="dashboard"
        style={{ display: this.props.showDash ? "block" : "none" }}
      >
        <div className="navbar_fixed">
          <div className="navbar">
            <div></div>
            <div className="brand_name">Post.It.</div>

            {this.props.info ? (
              <div id="navbar_inner_flex">
                <div>Welcome {this.props.info.displayName} </div>
                {this.props.info._json ? (
                  <div id="profile_pic_div">
                    <img
                      id="profile_pic"
                      src={this.props.info._json.profile_image_url_https}
                      alt="profile_pic"
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div className="body">
          <div className="sidenav">
            <div className="sidenav_div">1</div>
            <div className="sidenav_div">2</div>
            <div className="sidenav_div">3</div>
            <div className="sidenav_div">4</div>
          </div>
          <div className="main">
            {this.props.info.username ? (
              <div className="tl">
                <Tl name={this.props.info.username}></Tl>
              </div>
            ) : null}

            {this.state.queue ? (
              <Queue
                forceQueue={this.forceQueue}
                info={this.props.info}
                queue={this.state.queue}
              ></Queue>
            ) : (
              <div>Queue is empty</div>
            )}

            <Date info={this.props.info} forceQueue={this.forceQueue}></Date>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(`https://pro-organiser1.firebaseio.com/queue.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log("dddd", data);
        if (data) {
          fetch(
            `https://pro-organiser1.firebaseio.com/queue/${this.props.info.username}.json`
          )
            .then((response) => response.json())
            .then((data) => {
              this.setState({ queue: data });
            });
        }
      });
  }
  forceQueue = () => {
    fetch(
      `https://pro-organiser1.firebaseio.com/queue/${this.props.info.username}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        this.setState({ queue: data });
      });
  };
}

export default Dashboard;
