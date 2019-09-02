import React, { Component } from "react";

import Twitter from "../../../public/assets/twitter.svg";
import Facebook from "../../../public/assets/facebook.svg";

import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <footer className="footer">
          <div className="footer__div footer__div--contact">
            <a className="footer__link" href="localhost:3000">
              Terms and Conditions
            </a>
            <a className="footer__link" href="localhost:3000">
              Privacy Policy
            </a>
            <a className="footer__link" href="localhost:3000">
              Contact Us
            </a>
          </div>
          <div className="footer__div footer__div--media">
            <a className="footer__link" href="localhost:3000">
              Follow Us
            </a>
            <a className="footer__link" href="localhost:3000">
              <img className="media__icon" src={Facebook} alt="Facebook" />
            </a>
            <a className="footer__link" href="localhost:3000">
              <img className="media__icon" src={Twitter} alt="Twitter" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
