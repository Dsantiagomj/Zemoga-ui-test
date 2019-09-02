import React, { Component } from "react";

import Card from "./../card";
import Submit from "./../submit";

import "./style.css";

export default class CardsContainer extends Component {
  handleClick = (ref, oppositeRef) => {
    const thumb = ref.current;
    const oppositeThumb = oppositeRef.current;
    thumb.classList.add("active");
    oppositeThumb.classList.remove("active");
  };

  render() {
    const { candidates } = this.props;
    return (
      <div className="container">
        <section className="stars">
          <h2 className="stars__title">Votes</h2>
          {candidates.map((candidate, index) => {
            return (
              <Card
                key={candidate._id}
                starCard={
                  index === 0 ? "stars__card" : `stars__card card--${index + 1}`
                }
                starName={candidate.name}
                starCategory={candidate.category}
                starTotalVotes={candidate.votes}
                starPositiveVotes={candidate.positiveVotes}
                handleThumbClick={this.handleClick}
              />
            );
          })}
          <Submit />
        </section>
      </div>
    );
  }
}