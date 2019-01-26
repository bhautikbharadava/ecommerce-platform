import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="bar">
          <a href=""> E-Commerce</a>
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
