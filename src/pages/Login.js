import React, { Component } from "react";
import logo from "./../assets/logo.png";

export default class Login extends Component {
  render() {
    return (
      <section className="login-block">
        {/*  Container-fluid starts */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {/* Authentication card start*/}

              <form className="md-float-material form-material">
                <div className="text-center">
                  <img src={logo} alt="logo.png" />
                </div>
                <div className="auth-box card">
                  <div className="card-block">
                    <div className="row m-b-20">
                      <div className="col-md-12">
                        <h3 className="text-center">Login</h3>
                      </div>
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        required=""
                        placeholder="Your Email Address"
                      />
                      <span className="form-bar"></span>
                    </div>
                    <div className="form-group form-primary">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        required=""
                        placeholder="Password"
                      />
                      <span className="form-bar"></span>
                    </div>

                    <div className="row m-t-30">
                      <div className="col-md-12">
                        <button
                          type="button"
                          className="btn btn-primary btn-md btn-block waves-effect waves-light text-center m-b-20"
                        >
                          Connexion
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              {/* end of form*/}
            </div>
            {/* end of col-sm-12*/}
          </div>
          {/* end of row*/}
        </div>
        {/* end of container-fluid*/}
      </section>
    );
  }
}
