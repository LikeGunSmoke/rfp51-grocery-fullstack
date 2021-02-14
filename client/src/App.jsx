import React from "react";
import reactDOM from "react-dom";

class App extends React.component {
  constructor() {
    super(props);
    this.state = {
      groceryList: []
    }
  }
  render() {
    return <h1>WORKING!</h1>
  }
}

export default App;