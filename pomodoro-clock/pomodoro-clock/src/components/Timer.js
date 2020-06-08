import React from "react";
export class Timer extends React.Component {

  handleClick = (event) => {
    let stateName = event.target.id;
    let currentStateVal;

    if (stateName === "focusTime") currentStateVal = this.props.focusTime;
    else currentStateVal = this.props.breakTime;

    if (event.target.value === "+" && currentStateVal !== 60)
      this.setState({
        [stateName]: currentStateVal + 1,
      });
    else if (event.target.value === "-" && currentStateVal !== 1)
      this.setState({
        [stateName]: currentStateVal - 1,
      });
  };

  handleClick = (event) => { 
    let stateName = event.target.id
    let value = event.target.value
    this.props.timerClick(stateName, value)
  }


  render() {
    return (
      <div className="">
        <div className="title-level">
          <h2 className="min-title">Focus Timer</h2>
          <h2 className="min-title">Break Timer</h2>
        </div>
        <div className="button-level">
          <div className="timerButtons">
            <button onClick={this.handleClick} id="breakTime" value="-">
              -
            </button>
            <h1>{this.props.breakTime}</h1>
            <button onClick={this.handleClick} id="breakTime" value="+">
              +
            </button>
          </div>
          <div className="timerButtons">
            <button onClick={this.handleClick} id="focusTime" value="-">
              -
            </button>
            <h1>{this.props.focusTime}</h1>
            <button onClick={this.handleClick} id="focusTime" value="+">
              +
            </button>
          </div>
        </div>
      </div>
    );
  }
}
