import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import bus from "./bus-scheduling-input.json";
import Display from "./components/Display";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Display />
        </main>
      </div>
    );
  }
}

export default App;
