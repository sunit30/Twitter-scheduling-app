import React from "react";
import { format } from "morgan";
import emptyLogo from "../Dashboard/empt.png";
import Date from "../Date/Date";
import Queue from "../Queue/Queue";
import "../Dashboard/Dashboard.scss";
import Sidenav from "../sidenav/Sidenav";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queue: null,
      //showDateComp: false,
    };
  }
  render() {
    return (
      <div
        id="dashboard"
        style={{ display: this.props.showDash ? "block" : "none" }}
      >
        <div className="navbar_fixed">
          <div className="navbar">
            <div id="blankDiv"></div>
            <div className="brand_name">Post.It.</div>

            {this.props.info ? (
              <div id="navbar_inner_flex">
                <div>Welcome, {this.props.info.displayName} </div>
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
          <Sidenav
            infoJson={this.props.info._json}
            name={this.props.info.username}
            showDate={this.showDateFunc}
          ></Sidenav>
          <div className="main">
            {this.state.queue ? (
              <Queue
                forceQueue={this.forceQueue}
                info={this.props.info}
                queue={this.state.queue}
              ></Queue>
            ) : (
              <div className="queueEmpty">
                <img src={emptyLogo} alt="empty" />
                <div>Queue is empty</div>
              </div>
            )}
            <Date
              //showDate={this.state.showDateComp}
              //hideDate={this.hideDateFunc}
              info={this.props.info}
              forceQueue={this.forceQueue}
            ></Date>
          </div>
        </div>
      </div>
    );
  }
  // showDateFunc = () => {
  //   console.log(this.state.showDateComp);
  //   this.setState({ showDateComp: true });
  // };
  // hideDateFunc = () => {
  //   this.setState({ showDateComp: false });
  // };

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
