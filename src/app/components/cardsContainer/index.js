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
    candidatePositiveVotes,
    voteTextRef,
    voteNowButtonRef,
    voteAgainTextRef,
    voteAgainButtonRef
  ) => {
    const { apiUrl, getInfo } = this.props;
    const thumbUp = ref.current;
    const thumbDown = oppositeRef.current;
    let votes = candidateVote;
    let positiveVotes = candidatePositiveVotes;
    const voteText = voteTextRef.current;
    const voteNowButton = voteNowButtonRef.current;
    const voteAgainText = voteAgainTextRef.current;
    const voteAgainButton = voteAgainButtonRef.current;

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

    voteText.classList.toggle("active");
    voteAgainText.classList.toggle("active");
    voteNowButton.classList.toggle("active");
    voteAgainButton.classList.toggle("active");
    thumbUp.classList.toggle("none");
    thumbDown.classList.toggle("none");
  };

  handleVoteAgain = (
    voteTextRef,
    voteNowButtonRef,
    voteAgainTextRef,
    voteAgainButtonRef,
    thumbUpRef,
    thumbDownRef
  ) => {
    const voteText = voteTextRef.current;
    const voteNowButton = voteNowButtonRef.current;
    const voteAgainText = voteAgainTextRef.current;
    const voteAgainButton = voteAgainButtonRef.current;
    const thumbUp = thumbUpRef.current;
    const thumbDown = thumbDownRef.current;

    voteText.classList.toggle("active");
    voteAgainText.classList.toggle("active");
    voteNowButton.classList.toggle("active");
    voteAgainButton.classList.toggle("active");
    thumbUp.classList.toggle("none");
    thumbDown.classList.toggle("none");
  };

  identifyPhoto = name => {
    const firstName = name.split(" ")[0].toLowerCase();
    switch (firstName) {
      case "mark":
        return "2";
      case "cristina":
        return "3";
      case "malala":
        return "4";
      default:
        return "";
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
                starCard={`stars__card card--${this.identifyPhoto(
                  candidate.name
                )}`}
                starName={candidate.name}
                starCategory={candidate.category}
                starTotalVotes={candidate.votes}
                starPositiveVotes={candidate.positiveVotes}
                handleThumbClick={this.handleClick}
                handleVoteNowClick={this.handleVote}
                handleVoteAgainClick={this.handleVoteAgain}
              />
            );
          })}
          <Submit />
        </section>
      </div>
    );
  }
}
