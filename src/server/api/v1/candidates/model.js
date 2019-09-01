const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  name: String,
  category: String,
  positiveVotes: Number,
  votes: Number,
};

const candidate = new Schema(fields, {
  timestamps: true,
});

module.exports = mongoose.model("candidate", candidate);
