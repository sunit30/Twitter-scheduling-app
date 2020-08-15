import React from "react";
import "./Sidenav.scss";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PostNow from "../PostNow/PostNow";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
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
      <div>
        <div className="sidenav">
          <div
            //onClick={this.callshowDate}
            className="sidenav_div"
          >
            Schedule Tweet
          </div>
          <div className="sidenav_div">
            <button onClick={this.onOpenModal}>Post Now</button>
          </div>
          <div className="sidenav_div">3</div>
          <div className="sidenav_div">4</div>
        </div>

        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
          <PostNow onClose={this.onCloseModal}></PostNow>
        </Modal>
      </div>
    );
  }

  // callshowDate = () => {
  //   this.props.showDate();
  // };
}

export default Sidenav;
