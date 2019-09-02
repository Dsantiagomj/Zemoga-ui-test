import React, { Component } from "react";

import Thumb from "../../../public/assets/like.svg";

import "./style.css";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.thumbUp = React.createRef();
    this.thumbDown = React.createRef();
  }

  render() {
    const {
      id,
      starCard,
      starName,
      starCategory,
      starTotalVotes,
      starPositiveVotes,
      handleThumbClick,
      handleVoteClick,
    } = this.props;

    let positivePercentage = 50;
    let negativePercentage = 50;

    if (starTotalVotes) {
      positivePercentage = Math.round(
        (starPositiveVotes / starTotalVotes) * 100
      );
      negativePercentage = Math.round(
        ((starTotalVotes - starPositiveVotes) / starTotalVotes) * 100
      );
    }
    return (
      <article className={starCard}>
        <div className="card__content">
          <div
            className={
              starTotalVotes / 2 <= starPositiveVotes
                ? "active content content--like"
                : " content content--like"
            }
          >
            <img src={Thumb} alt="like" className="content__icon" />
          </div>
          <div
            className={
              starTotalVotes / 2 > starPositiveVotes
                ? "active content content--dislike"
                : " content content--dislike"
            }
          >
            <img src={Thumb} alt="dislike" className="content__icon" />
          </div>
          <div className="content__wrapper">
            <h3 className="content__title">{starName}</h3>
            <p className="content__description">
              <span className="description__span">1 month ago</span>
              {" in "}
              {starCategory}
            </p>
            <p className="active content__text content__text--default">
              Vestibulum diam ante, porttitos a odio eget, rhoncus neque. Aenean
              eu velit libero.
            </p>
            <p className="content__text content__text--again">
              Thank you for voting!
            </p>
            <div className="content__buttons">
              <div
                className="buttons thumbs__button"
                onClick={() => handleThumbClick(this.thumbUp, this.thumbDown)}
                ref={this.thumbUp}
              >
                <img src={Thumb} alt="thumb up" className="button__image" />
              </div>
              <div
                className="buttons thumbs__button--dislike"
                onClick={() => handleThumbClick(this.thumbDown, this.thumbUp)}
                ref={this.thumbDown}
              >
                <img
                  src={Thumb}
                  alt="thumb down"
                  className="button__image button__image--dislike"
                />
              </div>
              <div className="buttons vote__button">
                <a
                  href="localhost:3000"
                  className="button__inline button__inline--now active"
                  onClick={() => {
                    handleVoteClick(
                      id,
                      this.thumbUp,
                      this.thumbDown,
                      starTotalVotes,
                      starPositiveVotes
                    );
                  }}
                >
                  Vote Now
                </a>
                <a
                  href="localhost:3000"
                  className="button__inline button__inline--again"
                >
                  Vote again
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="card__progress">
          <span
            className="progress__value"
            style={{ width: `${positivePercentage}%` }}
          ></span>
          <img className="progress__icon--like" src={Thumb} alt="like" />
          <span className="progress__like">{positivePercentage}%</span>
          <img className="progress__icon--dislike" src={Thumb} alt="dislike" />
          <span className="progress__dislike">{negativePercentage}%</span>
        </div>
      </article>
    );
  }
}
