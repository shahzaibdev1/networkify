import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "fontsource-roboto";

// import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar>
            <Route path="/" exact component={Landing} />
            <div className="container">
              <Route path="/login" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </div>
            <Footer />
          </Navbar>
        </div>
      </Router>
    );
  }
}

export default App;
