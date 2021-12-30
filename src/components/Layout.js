import React, { Component } from "react";
import Navbar from "./Navbar";
import Navbarinside from "./Navbarinside";
import Test from "./../pages/Test";
export default class Layout extends Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="pcoded-main-container">
          <div className="pcoded-wrapper">
            <Navbarinside />
            <div className="pcoded-content">
              <div className="pcoded-inner-content">
                <div className="main-body">
                  <div className="page-wrapper">
                    <Test />
                  </div>

                  <div id="styleSelector"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
