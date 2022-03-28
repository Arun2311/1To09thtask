import React, { Component } from "react";
import IncreamentandDecreament from "./IncreamentandDecreament";
import "bootstrap";
import Reactproject2 from "./Reactproject2";
import DataLists from "./DataLists";
import Reactproject4 from "./Reactproject4";

class App extends Component {
  render() {
    return (
      <div>
        <DataLists />
        <IncreamentandDecreament />
        <Reactproject2 />
        <Reactproject4 />
      </div>
    );
  }
}

export default App;