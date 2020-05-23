import React from "react";
import { Clock } from "./components/Clock";
import { Timer } from "./components/Timer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer />
        <Clock />
      </header>
    </div>
  );
}

export default App;
