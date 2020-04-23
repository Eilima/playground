import React from "react";
import { Button } from "./Button";

export class Random extends React.Component {
  state = {
    color: [],
  };

  render() {
    return (
      <div>
        <div>
          <h1>Display RGB</h1>
        </div>
        <Button />
      </div>
    );
  }
}
