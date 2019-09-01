const mongoose = require("mongoose");

const { Schema } = mongoose;

const fields = {
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 128,
  },
  category: {
    type: String,
    trim: true,
    maxlength: 128,
  },
  positiveVotes: {
    type: Number,
  },
  votes: {
    type: Number,
  },
};

const candidate = new Schema(fields, {
  timestamps: true,
});

module.exports = mongoose.model("candidate", candidate);
