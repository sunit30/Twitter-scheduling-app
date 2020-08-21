import React from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./PostNow.scss";

class PostNow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <form
          id="mesSend"
          //style={{ display: this.props.showForm ? "block" : "none" }}
          onSubmit={this.addComment}
        >
          <textarea id="newMes"></textarea>
          <br />
          <button className="postNowSubmit" type="submit">
            Post to Twitter
          </button>
        </form>

        <ToastContainer position="top-center" />
      </div>
    );
  }
  addComment = (event) => {
    event.preventDefault();

    let newTweetComment = {
      comment: document.getElementById("newMes").value,
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:5000/comment/", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = () => {
      if (xhr.readyState != 4 || xhr.status != 200) {
        console.log("error!!!");

        return;
      }
      console.log("response", xhr.responseText);
      if (JSON.parse(xhr.responseText).errors) {
        alert("error");
      } else {
        const success = () => toast("Tweet Posted");
        success();

        setTimeout(() => {
          document.getElementById("newMes").value = "";
          this.props.onClose();
        }, 4070);

        //console.log("thisssssssss", this.props.info);
      }
    };
    xhr.send(JSON.stringify(newTweetComment));
  };
}

export default PostNow;

// const date = require("date-and-time");
// // Import "timespan" plugin.
// const timespan = require("date-and-time/plugin/timespan");

// // Apply "timespan" plugin to `date-and-time`.
// date.plugin(timespan);

// const now = new Date(2020, 2, 5, 1, 2, 3, 4);
// const new_years_day = new Date(2020, 0, 1);

// date.timeSpan(now, new_years_day).toDays("D HH:mm:ss.SSS"); // => '64 01:02:03.004'
// date.timeSpan(now, new_years_day).toHours("H [hours] m [minutes] s [seconds]"); // => '1537 hours 2 minutes 3 seconds'
// date.timeSpan(now, new_years_day).toMinutes("mmmmmmmmmm [minutes]"); // => '0000092222 minutes'
