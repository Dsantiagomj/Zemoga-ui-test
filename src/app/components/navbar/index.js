import React, { Component } from "react";

import Search from "../../../public/assets/search.svg";
import Burguer from "../../../public/assets/burger.svg";

import "./style.css";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav className="navbar__section">
          <div className="navbar__item navbar__item-brand">
            <h1 className="navbar__title">Rule of Thumb</h1>
          </div>
        </nav>
        <nav className="navbar__section navbar__section--right">
          <div className="navbar__item">
            <a className="navbar__link" href="localhost:3000">
              Past Trials
            </a>
          </div>
          <div className="navbar__item">
            <a className="navbar__link" href="localhost:3000">
              How it works
            </a>
          </div>
          <div className="navbar__item">
            <a className="navbar__link" href="localhost:3000">
              Log In/ Sign Up
            </a>
          </div>
          <div className="navbar__item">
            <a className="navbar__link" href="localhost:3000">
              <img
                className="navbar__icon search__image"
                src={Search}
                alt="search"
              />
            </a>
          </div>
        </nav>
        <div id="burger" className="navbar__section navbar__section--toggle">
          <img
            className="navbar__icon burger__image"
            src={Burguer}
            alt="burger"
          />
        </div>
      </div>
    );
  }
}
