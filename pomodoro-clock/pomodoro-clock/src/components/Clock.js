import React from "react";
import { Timer } from "./Timer";
import { Controls } from "./Controls";

export class Clock extends React.Component {
  timerId = null
  state = { 
    focusTime: 25,
    breakTime: 5,
    timer: 1500,
    sound: 'on',
    timerState: 'stop',
  }

  startStop = () => {
    if(this.state.timerState === 'stop') {
      this.setState({timerState: 'play'})
      setInterval(this.decrementTimer, 1000) 
    } else {
      this.setState({timerState: 'stop'})
      clearInterval(this.decrementTimer)
    }
  }

  timerClick = (stateName, value) => {
    let currentStateVal;

    stateName === "focusTime" ? currentStateVal = this.state.focusTime : currentStateVal = this.state.breakTime

    if (value === "+" && currentStateVal !== 60)
      this.setState({
        [stateName]: currentStateVal + 1,
      }, this.changeTimer);

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
  decrementTimer = () => {
    this.setState({
      timer: this.state.timer - 1
    })
  }

  timerControl() {
    let control = this.state.timerState == 'stopped' ? (
      this.beginCountDown(),
      this.setState({timerState: 'running'})
    ) : (
      this.setState({timerState: 'stopped'}),
      this.state.intervalID && this.state.intervalID.cancel()
    );
  }

  setSound = (soundVal) => {
    this.setState({sound: soundVal})
  }

  resetTimer = () => {
    this.setState({
      focusTime: 25,
      breakTime: 5,
      timer: 1500,
      timerState: 'stop'
    })

  }

  changeTimer = () => {
    let timerVal = this.state.focusTime * 60
    this.setState({
      timer: timerVal
    })
  }


  render() {
    return (
      <div>
        <Timer focusTime={this.state.focusTime} breakTime={this.state.breakTime} timerClick={this.timerClick} />
        <h1 className='title-level'>{this.clockify()}</h1>
        <Controls startStop={this.startStop} setSound={this.setSound} toggleSound={this.toggleSound} setTimer={this.resetTimer}/>
      </div>
    );
  }
}
