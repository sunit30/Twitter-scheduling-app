import React, { Component } from "react";
import DateTimePicker from "react-datetime-picker";
import Form from "../Form/Form";
import Schedule from "./Schedule/Schedule";

class MyApp extends Component {
  state = {
    date: new Date(),
    Selected: false,
  };

  onChange = (date) => this.setState({ date: date });
  onSelect = () => {
    this.setState({ Selected: true });
  };

  render() {
    return (
      <div>
        <DateTimePicker
          //format="yyyy MM dd HH mm ss"
          onChange={this.onChange}
          value={this.state.date}
          minDate={new Date()}
        />
        <button onClick={this.onSelect}>Select</button>
        {this.state.Selected == true ? (
          <Schedule
            date={this.state.date}
            selected={this.state.selected}
            info={this.props.info}
            callDash={this.callDash}
          ></Schedule>
        ) : null}
      </div>
    );
  }
  callDash = () => {
    this.props.forceQueue();
  };
}
export default MyApp;
