import React, { Component } from "react";

export default class Pagetitle extends Component {
  render() {
    return (
      <div className="page-header">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="page-header-title">
              <div className="d-inline">
                <h4>{this.props.title}</h4>
                <span>BKO EAT | Livraison alimenataire sur Bko</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
