import React from "react";
import { format } from "morgan";
import date from "date-and-time";
import timespan from "date-and-time/plugin/timespan";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import firebase from "../../../fire";
import "./Schedule.scss";

class Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.postNow = false;
  }
  render() {
    //console.log("date", this.props.info);
    //console.log(this.props.date, new Date());
    return (
      <div>
        {/* <div id="fail"></div> */}
        <form
          id="mesSender"
          //style={{ display: this.props.showForm ? "block" : "none" }}
          onSubmit={this.addComment}
        >
          {this.props.tweetToUpdate ? (
            <textarea
              defaultValue={this.props.tweetToUpdate}
              id="newMessage"
            ></textarea>
          ) : (
            <textarea id="newMessage"></textarea>
          )}

          <br />
          <button type="submit">Post to Twitter</button>
        </form>

        <ToastContainer position="top-center" />
      </div>
    );
  }
  addComment = (event) => {
    date.plugin(timespan);
    let scheduleDate = this.props.date;
    let currentDate = new Date();
    let ts = date.timeSpan(scheduleDate, currentDate).toMinutes("mmmmmmmmmm");
    let minutes = Number(ts);
    console.log(typeof minutes, minutes);
    event.preventDefault();

    let newTweetComment = {
      comment: document.getElementById("newMessage").value,
    };
    // var time_str = prompt("Time in minutes (0 for now) : ", "0");
    // let time = Number(time_str);
    // // ------------------- decimal or negative
    // alert(time);
    //comment

    let tweetIt = () => {
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:5000/comment/", true);
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.onreadystatechange = () => {
        if (xhr.readyState != 4 || xhr.status != 200) {
          console.log("error!!!");
          //document.getElementById("fail").innerHTML = "Could'nt post.";

          return;
        }
        console.log("response", xhr.responseText);
        if (JSON.parse(xhr.responseText).errors) {
          alert("error");
        } else {
          // document.getElementById("fail").innerHTML = "";
          const success = () => toast("Tweet Posted");
          success();
          console.log("thisssssssss", this.props.info);
          if (this.postNow != true) {
            if (this.props.info) {
              let keyarr;
              fetch(
                `https://pro-organiser1.firebaseio.com/queue/${this.props.info.username}.json`
              )
                .then((response) => response.json())
                .then((data) => {
                  if (data) {
                    console.log("fetch", data);
                    keyarr = Object.keys(data).filter((key) => {
                      console.log("key.tweet", typeof key);

                      return data[key].tweet == newTweetComment.comment;
                    });
                    console.log("keyarr", keyarr[0]);
                    firebase
                      .database()
                      .ref(
                        "queue/" +
                          this.props.info.username +
                          "/" +
                          keyarr[0] +
                          "/"
                      )
                      .remove()
                      // axios
                      //   .post(
                      //     `https://pro-organiser1.firebaseio.com/queue/${this.props.info.username}/${keyarr[0]}.json`,
                      //     ""
                      //   )
                      .then(() => {
                        this.props.callDash();
                      });
                  }
                });
            }
          }
        }
      };
      xhr.send(JSON.stringify(newTweetComment));
    };

    if (ts == 0) {
      this.postNow = true;
      tweetIt();
      this.postNow = false;
      this.props.closeText();
    } else {
      let tout = setTimeout(tweetIt, 1000 * 60 * minutes);
      axios
        .post(
          `https://pro-organiser1.firebaseio.com/queue/${this.props.info.username}.json`,
          {
            tweet: newTweetComment.comment,
            timeoutId: tout,
            date: this.props.date,
          }
        )
        .then(() => {
          this.props.callDash();
          this.props.closeText();
        });
    }
    document.getElementById("newMessage").value = "";
  };
}

export default Schedule;

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
