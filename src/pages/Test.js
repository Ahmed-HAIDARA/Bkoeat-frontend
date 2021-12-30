import React, { Component } from "react";
import Pagetitle from "./../components/PageTitle";

export default class Test extends Component {
  render() {
    return (
      <>
        <Pagetitle title="Page test" />

        <div className="page-body">
          <div className="row">
            {/* <!-- task, page, download counter  start --> */}
            <div className="col-xl-3 col-md-6">
              <div className="card bg-c-yellow update-card">
                <div className="card-block">
                  <div className="row align-items-end">
                    <div className="col-8">
                      <h4 className="text-white">$30200</h4>
                      <h6 className="text-white m-b-0">All Earnings</h6>
                    </div>
                    <div className="col-4 text-right">
                      <canvas id="update-chart-1" height="50"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white m-b-0">
                    <i className="feather icon-clock text-white f-14 m-r-10"></i>
                    update : 2:15 am
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-c-green update-card">
                <div className="card-block">
                  <div className="row align-items-end">
                    <div className="col-8">
                      <h4 className="text-white">290+</h4>
                      <h6 className="text-white m-b-0">Page Views</h6>
                    </div>
                    <div className="col-4 text-right">
                      <canvas id="update-chart-2" height="50"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white m-b-0">
                    <i className="feather icon-clock text-white f-14 m-r-10"></i>
                    update : 2:15 am
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-c-pink update-card">
                <div className="card-block">
                  <div className="row align-items-end">
                    <div className="col-8">
                      <h4 className="text-white">145</h4>
                      <h6 className="text-white m-b-0">Task Completed</h6>
                    </div>
                    <div className="col-4 text-right">
                      <canvas id="update-chart-3" height="50"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white m-b-0">
                    <i className="feather icon-clock text-white f-14 m-r-10"></i>
                    update : 2:15 am
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="card bg-c-lite-green update-card">
                <div className="card-block">
                  <div className="row align-items-end">
                    <div className="col-8">
                      <h4 className="text-white">500</h4>
                      <h6 className="text-white m-b-0">Downloads</h6>
                    </div>
                    <div className="col-4 text-right">
                      <canvas id="update-chart-4" height="50"></canvas>
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <p className="text-white m-b-0">
                    <i className="feather icon-clock text-white f-14 m-r-10"></i>
                    update : 2:15 am
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- task, page, download counter  end --> */}
          </div>
        </div>
      </>
    );
  }
}
