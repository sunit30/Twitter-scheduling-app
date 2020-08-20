import React from "react";
import "./queue.scss";
import firebase from "../../fire";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePick from "../Date/Date";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

class Queue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queueObj: null,
      mountUpdate: null,
      open: false,
      tweetSelected: null,
    };
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
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  closeDate = () => {
    this.onCloseModal();
    this.setState({ mountUpdate: null });
    //console.log("on close");
  };
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
    //console.log("m u", this.state.mountUpdate);
    const { open } = this.state;
    let arr = null;
    if (this.state.queueObj) {
      arr = Object.values(this.state.queueObj).map((obj) => {
        let d = new Date(obj.date).toLocaleString();
        // console.log("obj", d);
        return (
          <div key={obj.tweet} className="qblock">
            {obj.tweet}
            <div className="bottomFlex">
              <div className="date">{d}</div>
              <div className="bottomRightFlex">
                <button
                  value={obj.tweet}
                  onClick={this.deleteFunc}
                  className="delete"
                >
                  Delete
                </button>
                <button
                  value={obj.tweet}
                  onClick={this.updateFunc}
                  className="update"
                >
                  Update
                </button>
              </div>
            </div>
            <ToastContainer position="top-center" />
          </div>
        );
      });
    }
    return (
      <div className="qcontain">
        {" "}
        {arr}
        {this.state.mountUpdate ? (
          <Modal open={open} onClose={this.onCloseModal} center>
            {" "}
            {this.state.mountUpdate}{" "}
          </Modal>
        ) : null}
      </div>
    );
    //console.log(this.state.queue);

    // console.log("length", data.length);
    // return data.length ? 1 : 0;
  }
  deleteFunc = (event) => {
    let r = window.confirm("Delete Scheduled Tweet?");
    if (r == true) {
      let key;

      key = Object.keys(this.state.queueObj).filter((key) => {
        return this.state.queueObj[key].tweet == event.target.value;
      });
      clearTimeout(this.state.queueObj[key[0]].timeoutId);

      firebase
        .database()
        .ref("queue/" + this.props.info.username + "/" + key[0] + "/")
        .remove()
        .then(() => {
          this.props.forceQueue();
          let deleted = () => toast("Tweet Deleted");
          deleted();
        });
    }
    // .then(() => {
    //   this.props.delete(false);
    // });
  };
  updateFunc = (event) => {
    this.setState({ tweetSelected: event.target.value });
    let r = window.confirm("Update Scheduled Tweet?");
    if (r == true) {
      let key;

      key = Object.keys(this.state.queueObj).filter((key) => {
        return this.state.queueObj[key].tweet == event.target.value;
      });
      clearTimeout(this.state.queueObj[key[0]].timeoutId);

      firebase
        .database()
        .ref("queue/" + this.props.info.username + "/" + key[0] + "/")
        .remove()
        .then(() => {
          this.props.forceQueue();

          let mountUpdate = (
            <DatePick
              //showDate={this.state.showDateComp}
              //hideDate={this.hideDateFunc}
              info={this.props.info}
              forceQueue={this.props.forceQueue}
              tweetToUpdate={this.state.tweetSelected}
              closeDate={this.closeDate}
            ></DatePick>
          );
          this.setState({ open: true, mountUpdate: mountUpdate });
        });
    }
    // .then(() => {
    //   this.props.delete(false);
    // });
  };
}

export default Queue;
