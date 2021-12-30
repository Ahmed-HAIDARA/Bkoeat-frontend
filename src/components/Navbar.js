import React, { Component } from "react";
import profile from "./../assets/profile.png";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar header-navbar pcoded-header">
        <div className="navbar-wrapper">
          <div className="navbar-logo">
            <a className="mobile-menu" id="mobile-collapse" href="#!">
              <i className="feather icon-menu"></i>
            </a>

            <a href="index.html">
              <h1 style={{ fontSize: 24, paddingLeft: 48 }}>Bko-Eat</h1>
              {/* <img className="img-fluid" src="./files/assets/images/logo.png" alt="Theme-Logo" /> */}
            </a>

            <a className="mobile-options">
              <i className="feather icon-more-horizontal"></i>
            </a>
          </div>

          <div className="navbar-container">
            <ul className="nav-right">
              <li className="user-profile header-notification">
                <div className="dropdown-primary dropdown">
                  <div className="dropdown-toggle" data-toggle="dropdown">
                    <img
                      src={profile}
                      className="img-radius"
                      aria-hidden
                      alt="Image of User."
                    />
                    <span>John Doe</span>
                    <i className="feather icon-chevron-down"></i>
                  </div>
                  <ul
                    className="show-notification profile-notification dropdown-menu"
                    data-dropdown-in="fadeIn"
                    data-dropdown-out="fadeOut"
                  >
                    <li>
                      <a href="./default/user-profile.html">
                        <i className="feather icon-user"></i> Profile
                      </a>
                    </li>

                    <li>
                      <a href="./default/auth-normal-sign-in.html">
                        <i className="feather icon-log-out"></i> Déconexion
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
