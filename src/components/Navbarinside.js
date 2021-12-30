import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="pcoded-navbar">
        <div className="pcoded-inner-navbar main-menu">
          <div className="pcoded-navigatio-lavel">Navigation</div>

          <ul className="pcoded-item pcoded-left-item">
            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Dashboard</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Restaurants</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Plats</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Boissons</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Desserts</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Commandes</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Paiements</span>
              </a>
            </li>

            <li className="">
              <a href="#">
                <span className="pcoded-micon">
                  <i className="feather icon-menu"></i>
                </span>
                <span className="pcoded-mtext">Clients</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
