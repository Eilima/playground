import React from "react";
import { Timer } from "./Timer";

export class Clock extends React.Component {
  state = { 
    focusTime: 25,
    breakTime: 5,
    timer: 1500,
  }

  timerClick = (stateName, value) => {
    let currentStateVal;

    if (stateName === "focusTime") currentStateVal = this.state.focusTime;
    else currentStateVal = this.state.breakTime;

    if (value === "+" && currentStateVal !== 60)
      this.setState({
        [stateName]: currentStateVal + 1,
      });
    else if (value === "-" && currentStateVal !== 1)
      this.setState({
        [stateName]: currentStateVal - 1,
      });
  };

  clockify = () => {
    let minutes = Math.floor(this.state.timer/60)
    let seconds = this.state.timer - minutes * 60
    seconds = seconds < 10 ? '0' + seconds : seconds
    minutes = minutes < 10 ? '0' + minutes : minutes
    return `${minutes}:${seconds}`
  }
  render() {
    return (
      <div>
        <Timer focusTime={this.state.focusTime} breakTime={this.state.breakTime} timerClick={this.timerClick} />
        <h1 className='title-level'>{this.clockify()}</h1>
      </div>
    );
  }
}
