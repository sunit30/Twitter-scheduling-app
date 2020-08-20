import React from "react";
import "./Sidenav.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PostNow from "../PostNow/PostNow";
import Tl from "../Tl/Tl";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openPn: false, openTl: false, openPic: false };
  }
  onOpenModalPn = () => {
    this.setState({ openPn: true });
  };

  onCloseModalPn = () => {
    this.setState({ openPn: false });
  };
  onOpenModalTl = () => {
    this.setState({ openTl: true });
  };

  onCloseModalTl = () => {
    this.setState({ openTl: false });
  };
  onOpenModalPic = () => {
    this.setState({ openPic: true });
  };

  onCloseModalPic = () => {
    this.setState({ openPic: false });
  };
  render() {
    //const { open } = this.state;
    // var btns = document.getElementsByClassName("sidenav_div");

    // // Loop through the buttons and add the active class to the current/clicked button
    // for (var i = 0; i < btns.length; i++) {
    //   btns[i].addEventListener("click", function () {
    //     var current = document.getElementsByClassName("active");

    //     // If there's no active class
    //     if (current.length > 0) {
    //       current[0].className = current[0].className.replace(" active", "");
    //     }

    //     // Add the active class to the current/clicked button
    //     this.className += " active";
    //   });
    // }

    return (
      <div>
        <div className="sidenav">
          <div
            //onClick={this.callshowDate}
            className="sidenav_div"
          >
            Schedule Tweet
          </div>
          <div className="sidenav_div" onClick={this.onOpenModalPn}>
            Post Now
          </div>
          <div className="sidenav_div" onClick={this.onOpenModalTl}>
            Timeline
          </div>
          <div className="sidenav_div" onClick={this.onOpenModalPic}>
            Profile Pic
          </div>
        </div>

        <Modal open={this.state.openPn} onClose={this.onCloseModalPn} center>
          <PostNow onClose={this.onCloseModalPn}></PostNow>
        </Modal>
        <Modal open={this.state.openTl} onClose={this.onCloseModalTl} center>
          {this.props.name ? (
            <div className="tl">
              <Tl name={this.props.name}></Tl>
            </div>
          ) : null}
        </Modal>

        <Modal open={this.state.openPic} onClose={this.onCloseModalPic} center>
          {this.props.infoJson ? (
            <div id="profile_pic_div">
              <img
                id="modalPic"
                src={this.props.infoJson.profile_image_url_https}
                alt="profile_pic"
              />
            </div>
          ) : null}
        </Modal>
      </div>
    );
  }

  // callshowDate = () => {
  //   this.props.showDate();
  // };
}

export default Sidenav;
