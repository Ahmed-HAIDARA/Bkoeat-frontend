import React, { Component } from "react";
import Layout from "./Layout";
import Login from "../pages/Login";

export default class App extends Component {
  render() {
    console.log("*****", window.location.pathname);

    if (window.location.pathname !== "/") {
      return <Layout />;
    } else {
      return <Login />;
    }
  }
}
