const mongoose = require("mongoose");
const { number } = require("yargs");
const Movie = require("./movieModels");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj)
    } catch (error) {
        console.log(error);
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error);
    }
};    



// create an update one or update many functions

// create a delete one or many delete function. 

exports.updateMovie = async (criteria, movieObj) => {
    try {
      await Movie.updateOne(criteria, movieObj);
    } catch (error) {
      console.log(error);
    }
  };
  
  exports.deleteMovie = async (criteria, movieObj) => {
    try {
      await Movie.deleteOne(criteria, movieObj);
    } catch (error) {
      console.log(error);
    }
  };