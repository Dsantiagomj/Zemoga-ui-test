import React, { Component } from "react";
import "./style.css";

import Search from "../../../public/assets/search.svg";
import Burger from "../../../public/assets/burger.svg";
import Close from "../../../public/assets/white_close.svg";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.navbar = React.createRef();
    this.burger = React.createRef();
  }

  handleMenu = () => {
    this.navbar.current.classList.toggle("active__block");
    if (this.navbar.current.classList.contains("active__block")) {
      this.burger.current.setAttribute("src", Close);
    } else {
      this.burger.current.setAttribute("src", Burger);
    }
  };

  render() {
    return (
      <div className="navbar">
        <nav className="navbar__section">
          <div className="navbar__item navbar__item-brand">
            <h1 className="navbar__title">Rule of Thumb</h1>
          </div>
        </nav>
        <nav
          className="navbar__section navbar__section--right"
          ref={this.navbar}
        >
          <div className="navbar__item">
            <a className="navbar__link" href="#">
              Past Trials
            </a>
          </div>
          <div className="navbar__item">
            <a className="navbar__link" href="#">
              How it works
            </a>
          </div>
          <div className="navbar__item">
            <a className="navbar__link" href="#">
              Log In/ Sign Up
            </a>
          </div>
          <div className="navbar__item">
            <a className="navbar__link" href="#">
              <img
                className="navbar__icon search__image"
                src={Search}
                alt="search"
              />
            </a>
          </div>
        </nav>
        <div
          id="burger"
          className="navbar__section navbar__section--toggle"
          onClick={() => this.handleMenu()}
        >
          <img
            className="navbar__icon burger__image"
            src={Burger}
            alt="burger"
            ref={this.burger}
          />
        </div>
      </div>
    );
  }
}
