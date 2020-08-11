import React from "react";
import { format } from "morgan";
import Tl from "../Tl/Tl";
import Date from "../Date/Date";
import Queue from "../Queue/Queue";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queue: null };
  }
  render() {
    return (
      <div
        id="dashboard"
        style={{ display: this.props.showDash ? "block" : "none" }}
      >
        You are Logged In
        <br />
        {this.state.queue ? (
          <Queue info={this.props.info} queue={this.state.queue}></Queue>
        ) : (
          <div>Queue is empty</div>
        )}
        {this.props.info ? (
          <div>
            <div>Welcome {this.props.info.displayName}</div>
            {/* <Tl name={this.props.info.username}></Tl> */}
          </div>
        ) : (
          <div>sjfbsfbsfk</div>
        )}
        <Date info={this.props.info} forceQueue={this.forceQueue}></Date>
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
