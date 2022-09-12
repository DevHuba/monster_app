import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((item) => {
          return (
            <div key={item.id}>
              <h1>{item.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
