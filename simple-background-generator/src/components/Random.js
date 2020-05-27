import React from "react";
import { Button } from "./Button";

export class Random extends React.Component {
  state = {
    color: [],
  };

  //Creates an array with 3 random numbers between 0 and 255 and sets a new array equal to the 
  randomColor = () => {
    let newArr = [];
    for (let i = 0; i < 3; i++) {
      newArr.push(Math.floor(Math.random() * 256));
    }
    this.setState({
      color: newArr,
    });
  };

  onClick = () => {
    this.randomColor();
  };

  formatColor = (arr) => {
    return `rgb(${arr.join(",")})`;
  };

  changeBackgroundColor = () => {
    document.body.style.background = this.formatColor(this.state.color);
  };

  componentDidUpdate(prevProps, prevState) {
    this.changeBackgroundColor();
  }

  render() {
    return (
      <div>
        <div>
          <h1>The current color is: {this.formatColor(this.state.color)} </h1>
        </div>
        <Button onClick={this.onClick} />
      </div>
    );
  }
}
