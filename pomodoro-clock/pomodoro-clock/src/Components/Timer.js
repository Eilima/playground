import React from "react";

export class Timer extends React.Component {
  state = {
    focusTime: 25,
    breakTime: 5,
  };

  timerClick = (event) => {
    if (event.target.id === "breakTime") {
      if (event.target.value === "+")
        this.setState({
          breakTime: this.state.breakTime + 1,
        });
      else
        this.setState({
          breakTime: this.state.breakTime - 1,
        });
    } else {
      if (event.target.value === "+")
        this.setState({
          focusTime: this.state.focusTime + 1,
        });
      else
        this.setState({
          focusTime: this.state.focusTime - 1,
        });
    }
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.timerClick} id="breakTime" value="+">
            +
          </button>
          <h1>{this.state.breakTime}</h1>
          <button onClick={this.timerClick} id="breakTime" value="-">
            -
          </button>
        </div>
        <div>
          <button onClick={this.timerClick} id="focusTime" value="+">
            +
          </button>
          <h1>{this.state.focusTime}</h1>
          <button onClick={this.timerClick} id="focusTime" value="-">
            -
          </button>
        </div>
      </div>
    );
  }
}
