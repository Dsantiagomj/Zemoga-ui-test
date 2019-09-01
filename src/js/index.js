class State {
  constructor(size) {
    this.state = {};
    this.totalVotes = [];
    this.positiveVotes = [];

    for (let i = 0; i < size; i++) {
      this.state[`${i}`] = {};
      this.positiveVotes[`${i}`] = 0;
      this.totalVotes[`${i}`] = 0;
    }
  }

  positiveVoting(index) {
    this.totalVotes[index] = this.totalVotes[index] + 1;
    this.positiveVotes[index] = this.positiveVotes[index] + 1;
    this.state[index]["positive"] = this.positiveVotes[index];
    this.state[index]["total"] = this.totalVotes[index];

    return (this.positiveVotes[index] / this.totalVotes[index]) * 100;
  }

  negativeVoting(index) {
    this.totalVotes[index] = this.totalVotes[index] + 1;
    this.state[index]["total"] = this.totalVotes[index];

    return (this.positiveVotes[index] / this.totalVotes[index]) * 100;
  }

  majorityCalculate(positiveCard, negativeCard, loadData) {
    let compare;
    if (loadData) {
      this.state = JSON.parse(loadData);
    }
    Object.keys(this.state).forEach(position => {
      if (this.state[position]["positive"]) {
        this.positiveVotes[position] = this.state[position]["positive"];
      } else {
        this.positiveVotes[position] = 1;
      }
      if (this.state[position]["positive"]) {
        this.totalVotes[position] = this.state[position]["total"];
      } else {
        this.totalVotes[position] = 1;
      }
    });

    Object.keys(this.state).forEach(position => {
      compare =
        this.state[position]["total"] - this.state[position]["positive"];
      if (compare > this.state[position]["positive"]) {
        positiveCard[position].classList.remove("active");
        negativeCard[position].classList.add("active");
      } else {
        negativeCard[position].classList.remove("active");
        positiveCard[position].classList.add("active");
      }
    });
  }

  saveOnStorage() {
    let data = JSON.stringify(this.state);
    localStorage.setItem("data", data);
  }

  drawCalculate(statusBar, load) {
    if (load) {
      this.state = JSON.parse(load);
    }

    Object.keys(this.state).forEach(position => {
      if (this.state[position]["positive"]) {
        this.positiveVotes[position] = this.state[position]["positive"];
      } else {
        this.positiveVotes[position] = 1;
      }
      if (this.state[position]["positive"]) {
        this.totalVotes[position] = this.state[position]["total"];
      } else {
        this.totalVotes[position] = 1;
      }
    });
    for (let i = 0; i < statusBar.length; i++) {
      if (this.state[i]["positive"] && this.state[i]["total"]) {
        statusBar[i].style.width = `${(this.state[i]["positive"] /
          this.state[i]["total"]) *
          100}%`;
        like[i].innerHTML = `${Math.round(
          (this.state[i]["positive"] / this.state[i]["total"]) * 100
        )}%`;
        dislike[i].innerHTML = `${Math.round(
          100 - (this.state[i]["positive"] / this.state[i]["total"]) * 100
        )}%`;
      } else {
        statusBar[i].style.width = `${50}%`;
        like[i].innerHTML = `${50}%`;
        dislike[i].innerHTML = `${50}%`;
      }
    }
  }
}

/* DOM Events */

// For Status Event
const positiveCard = document.getElementsByClassName("content--like");
const negativeCard = document.getElementsByClassName("content--dislike");

// When Load
window.addEventListener("load", function(e) {
  const loadData = localStorage.getItem("data");
  if (loadData) {
    value.drawCalculate(statusBar, loadData);
    value.majorityCalculate(positiveCard, negativeCard, loadData);
  } else {
    value.drawCalculate(statusBar);
    value.majorityCalculate(positiveCard, negativeCard);
  }
});

//Event for the navbar (toggle burger)
const navRight = document.getElementsByClassName(
  "navbar__section navbar__section--right"
);

document.getElementById("burger").addEventListener("click", function(e) {
  navRight[0].classList.toggle("active__block");
  if (navRight[0].classList.contains("active__block")) {
    this.firstElementChild.setAttribute("src", "public/assets/white_close.svg");
  } else {
    this.firstElementChild.setAttribute("src", "public/assets/burger.svg");
  }
});

//Event Select vote
const thumbsUpButton = document.getElementsByClassName("thumbs__button");
const thumbsDownButton = document.getElementsByClassName(
  "thumbs__button--dislike"
);

for (let i = 0; i < thumbsUpButton.length; i++) {
  thumbsUpButton[i].addEventListener("click", function(e) {
    e.currentTarget.classList.add("active");
    thumbsDownButton[i].classList.remove("active");
  });
  thumbsDownButton[i].addEventListener("click", function(e) {
    e.currentTarget.classList.add("active");
    thumbsUpButton[i].classList.remove("active");
  });
}

//Event for Vote now
const voteAgain = document.getElementsByClassName("button__inline--again");
const voteNow = document.getElementsByClassName("button__inline--now");
const like = document.getElementsByClassName("progress__like");
const dislike = document.getElementsByClassName("progress__dislike");
const statusBar = document.getElementsByClassName("progress__value");
let value = new State(statusBar.length);

for (let i = 0; i < voteNow.length; i++) {
  voteNow[i].addEventListener("click", function(e) {
    e.preventDefault();

    if (thumbsUpButton[i].classList.contains("active")) {
      let percentage = value.positiveVoting(i);
      statusBar[i].style.width = `${percentage}%`;
      like[i].innerHTML = `${Math.round(percentage)}%`;
      dislike[i].innerHTML = `${Math.round(100 - percentage)}%`;
      value.saveOnStorage();
    } else if (thumbsDownButton[i].classList.contains("active")) {
      let percentage = value.negativeVoting(i);
      statusBar[i].style.width = `${percentage}%`;
      dislike[i].innerHTML = `${Math.round(100 - percentage)}%`;
      like[i].innerHTML = `${Math.round(percentage)}%`;
      value.saveOnStorage();
    }
    textDefault[i].classList.toggle("active");
    textAgain[i].classList.toggle("active");
    voteNow[i].classList.toggle("active");
    voteAgain[i].classList.toggle("active");
    thumbsUpButton[i].classList.toggle("none");
    thumbsDownButton[i].classList.toggle("none");
    value.majorityCalculate(positiveCard, negativeCard);
  });
}

//Event for vote again
const textDefault = document.getElementsByClassName("content__text--default");
const textAgain = document.getElementsByClassName("content__text--again");

for (let i = 0; i < voteAgain.length; i++) {
  voteAgain[i].addEventListener("click", function(e) {
    e.preventDefault();

    textDefault[i].classList.toggle("active");
    textAgain[i].classList.toggle("active");
    voteNow[i].classList.toggle("active");
    voteAgain[i].classList.toggle("active");
    thumbsUpButton[i].classList.toggle("none");
    thumbsDownButton[i].classList.toggle("none");
  });
}
