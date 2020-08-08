import { Timeline } from "react-twitter-widgets";
import React from "react";
import { format } from "morgan";
class Tl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: this.props.name,
        }}
        options={{
          height: "400",
        }}
      />
    );
  }
}

export default Tl;
