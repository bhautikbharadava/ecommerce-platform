import React, { Component } from "react";
import Nav from "./Nav";
class Header extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <a href=""> E-Commerce</a>
          <Nav />
        </div>
        <div className="sub-bar">
          <p>Search</p>
        </div>
        <div>Cart</div>
      </div>
    );
  }
}

export default Header;
