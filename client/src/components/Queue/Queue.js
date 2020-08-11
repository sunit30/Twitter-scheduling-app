import React from "react";
import "./queue.scss";

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queueObj: null };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.queue) {
      return {
        queueObj: props.queue,
      };
    } else {
      return { queueObj: null };
    }
  }
  // fetchfunc = async () => {
  //   if (this.state.queue) {
  //     console.log("works");

  //     let q = await fetch(
  //       `https://pro-organiser1.firebaseio.com/${this.props.info.username}.json`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("queue", data);
  //         let arr = Object.values(data).map((obj) => {
  //           console.log("obj", obj.tweet);
  //           return obj.tweet;
  //         });
  //         //this.setState({ queue: q });
  //         console.log("arr", arr, typeof arr);
  //         return arr;

  //         // let tabData = Object.values(this.props.data).map((object, i) => {
  //         // return (
  //         //   <tr key={i}>
  //         //     <td>{object.symbol}</td>
  //         //   </tr>
  //         // );})
  //       });
  //     return q;
  //   } else return 0;
  // };
  render() {
    let arr = null;
    if (this.state.queueObj) {
      arr = Object.values(this.state.queueObj).map((obj) => {
        let d = new Date(obj.date).toLocaleString();
        //console.log("obj", obj.tweet);
        return (
          <div className="qblock">
            {obj.tweet}
            <div className="bottomFlex">
              <div className="date">{d}</div>
              <button className="delete">Delete</button>
            </div>
          </div>
        );
      });
    }
    return <div className="qcontain"> {arr}</div>;
    //console.log(this.state.queue);

    // console.log("length", data.length);
    // return data.length ? 1 : 0;
  }
}

export default Queue;
