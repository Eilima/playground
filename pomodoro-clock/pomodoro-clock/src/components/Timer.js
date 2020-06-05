import React from "react";
export class Timer extends React.Component {
  state = {
    focusTime: 25,
    breakTime: 5,
  };

  timerClick = (event) => {
    let stateName = event.target.id;
    let currentStateVal;

    if (stateName === "focusTime") currentStateVal = this.state.focusTime;
    else currentStateVal = this.state.breakTime;

    if (event.target.value === "+" && currentStateVal !== 60)
      this.setState({
        [stateName]: currentStateVal + 1,
      });
    else if (event.target.value === "-" && currentStateVal !== 1)
      this.setState({
        [stateName]: currentStateVal - 1,
      });
  };

  render() {
    return (
      <div className="">
        <div className="title-level">
          <h2 className="min-title">Focus Timer</h2>
          <h2 className="min-title">Break Timer</h2>
        </div>
        <div className="button-level">
          <div className="timerButtons">
            <button onClick={this.timerClick} id="breakTime" value="+">
              +
            </button>
            <h1>{this.state.breakTime}</h1>
            <button onClick={this.timerClick} id="breakTime" value="-">
              -
            </button>
          </div>
          <div className="timerButtons">
            <button onClick={this.timerClick} id="focusTime" value="+">
              +
            </button>
            <h1>{this.state.focusTime}</h1>
            <button onClick={this.timerClick} id="focusTime" value="-">
              -
            </button>
          </div>
        </div>
      </div>
    );
  }
}
