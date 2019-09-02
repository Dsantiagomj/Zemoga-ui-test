import React, { Component } from "react";

import Close from "../../../public/assets/close.svg";

import "./style.css";

export default class Popup extends Component {
  render() {
    return (
      <div className="container">
        <section className="message">
          <h2 className="message__title">
            Speak out. Be heard.
            <span className="message__title title__span">Be counted</span>
          </h2>
          <p className="message__text">
            Rule of Thumb is a crowd sourced court of public opinion where
            anyone and everyone can speak out and speak freely. It's easy: You
            share your opinion, we analyze and put the data in a public report.
          </p>
          <img className="message__icon" src={Close} alt="close" />
        </section>
      </div>
    );
  }
}
