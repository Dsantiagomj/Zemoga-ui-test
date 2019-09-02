const axios = require("axios");

const candidates = {
  0: {
    name: "Kanye West",
    category: "Entertainment",
    votes: 0,
    positiveVotes: 0,
  },
  1: {
    name: "Mark Zuckerberg",
    category: "Business",
    votes: 0,
    positiveVotes: 0,
  },
  2: {
    name: "Cristina Fernández de Kirchner",
    category: "Politics",
    votes: 0,
    positiveVotes: 0,
  },
  3: {
    name: "Malala Yousafzai",
    category: "Entertainment",
    votes: 0,
    positiveVotes: 0,
  },
};

Object.keys(candidates).forEach(key => {
  axios
    .post("http://localhost:3000/api/candidates", candidates[key])
    .then(response => console.log("candidate registered", response.data.data))
    .catch(error => console.error(error));
});
