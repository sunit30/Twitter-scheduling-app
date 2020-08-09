import React from "react";
import { format } from "morgan";
import Tl from "../Tl/Tl";
import Date from "../Date/Date";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        id="dashboard"
        style={{ display: this.props.showDash ? "block" : "none" }}
      >
        You are Logged In
        {this.props.info ? (
          <div>
            <div>Welcome {this.props.info.displayName}</div>
            {/* <Tl name={this.props.info.username}></Tl> */}
          </div>
        ) : (
          <div>sjfbsfbsfk</div>
        )}
        <Date></Date>
      </div>
    );
  }
}

export default Dashboard;
