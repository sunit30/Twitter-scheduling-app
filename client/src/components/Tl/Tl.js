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
      // <Timeline
      //   dataSource={{
      //     sourceType: "profile",
      //     screenName: this.props.name,
      //   }}
      //   options={{
      //     height: "400",
      //   }}
      // />
      <section className="twitterContainer">
        <div className="twitter-embed"></div>
      </section>
    );
  }
  componentDidMount() {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "twitter-timeline");
    anchor.setAttribute("data-width", "800");
    anchor.setAttribute("data-tweet-limit", "5");
    anchor.setAttribute("data-chrome", "noheader nofooter noborders");
    anchor.setAttribute("href", `https://twitter.com/${this.props.name}`);
    document.getElementsByClassName("twitter-embed")[0].appendChild(anchor);

    const script = document.createElement("script");
    script.setAttribute("async", "");
    script.setAttribute("src", "https://platform.twitter.com/widgets.js");
    script.setAttribute("charset", "utf-8");
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }
}

export default Tl;
