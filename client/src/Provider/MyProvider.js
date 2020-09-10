import React, { Component, createContext } from "react";

const MyContext = createContext();

class MyProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <MyContext.Provider value={this.state}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export { MyProvider, MyContext };
