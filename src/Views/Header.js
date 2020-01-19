import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
  render() {
    return (
      <section className="property-root header">
        <section className="property-items">
          <span className="item image"></span>
          <span className="item number">ID</span>
          <span className="item number">Stories</span>
          <span className="item number">Bedrooms</span>
          <span className="item number">Baths Full</span>
          <span className="item number">Baths Half</span>
          <span className="item date">List Date</span>
          <span className="item number">List Price</span>
          <span className="item save-button"></span>
        </section>
      </section>
    );
  }
}
