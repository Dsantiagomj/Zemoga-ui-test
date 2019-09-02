import React, { Component } from "react";
import axios from "axios";

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

  handleVote = async (
    id,
    ref,
    oppositeRef,
    candidateVote,
    candidatePositiveVotes
  ) => {
    const { apiUrl, getInfo } = this.props;
    const thumbUp = ref.current;
    const thumbDown = oppositeRef.current;
    let votes = candidateVote;
    let positiveVotes = candidatePositiveVotes;

    if (thumbUp.classList.length > thumbDown.classList.length) {
      votes += 1;
      positiveVotes += 1;
    } else {
      votes += 1;
    }

    try {
      const response = await axios.put(`${apiUrl}/candidates/${id}`, {
        votes,
        positiveVotes,
      });
      await getInfo();
    } catch (error) {
      console.error(error);
    }
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
                id={candidate._id}
                starCard={
                  index === 0 ? "stars__card" : `stars__card card--${index + 1}`
                }
                starName={candidate.name}
                starCategory={candidate.category}
                starTotalVotes={candidate.votes}
                starPositiveVotes={candidate.positiveVotes}
                handleThumbClick={this.handleClick}
                handleVoteClick={this.handleVote}
              />
            );
          })}
          <Submit />
        </section>
      </div>
    );
  }
}
