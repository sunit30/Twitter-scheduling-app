import React from "react";
import { format } from "morgan";
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return 0;
    // <form
    //   id="mesSender"
    //   style={{ display: this.props.showForm ? "block" : "none" }}
    //   onSubmit={this.addComment}
    // >
    //   <textarea id="newMessage"></textarea>
    //   <br />
    //   <button type="submit">Post to Twitter</button>
    // </form>
  }
  // addComment = (event) => {
  //   event.preventDefault();
  //   let newTweetComment = {
  //     comment: document.getElementById("newMessage").value,
  //   };
  //   var time_str = prompt("Time in minutes (0 for now) : ", "0");
  //   let time = Number(time_str);
  //   // ------------------- decimal or negative
  //   alert(time);
  //   let tweetIt = () => {
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("POST", "http://localhost:5000/comment/", true);
  //     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState != 4 || xhr.status != 200) return;
  //       console.log(xhr.responseText);
  //     };
  //     xhr.send(JSON.stringify(newTweetComment));
  //   };
  //   if (time == 0) {
  //     tweetIt();
  //   } else {
  //     setTimeout(tweetIt, 1000 * 60 * time);
  //   }

  //   document.getElementById("newMessage").value = "";
  //   alert("Tweet Posted");
  // };
}

export default Form;

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
