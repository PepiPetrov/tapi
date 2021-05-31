const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      // unique: true
    },
    runtimeInMinutes: {
      type: Number,
      required: true
    },
    budgetInMillions: {
      type: Number,
      required: true
    },
    academyAwardNominations: {
      type: Number,
      required: false
    },
    academyAwardWins: {
      type: Number,
      required: false
    }
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;