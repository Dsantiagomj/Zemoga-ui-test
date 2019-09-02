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
            <a className="footer__link" href="#">
              Terms and Conditions
            </a>
            <a className="footer__link" href="#">
              Privacy Policy
            </a>
            <a className="footer__link" href="#">
              Contact Us
            </a>
          </div>
          <div className="footer__div footer__div--media">
            <a className="footer__link" href="#">
              Follow Us
            </a>
            <a className="footer__link" href="#">
              <img className="media__icon" src={Facebook} alt="Facebook" />
            </a>
            <a className="footer__link" href="#">
              <img className="media__icon" src={Twitter} alt="Twitter" />
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
