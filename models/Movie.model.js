// models/Book.model.js

const mongosse = require('mongoose');

const moviesSchema  = new mongoose.Schema({
    title: {
        type : String,
    },
    director: {
        type: String,
    },
    stars: {
        type: String,
    },
    image: {
        type: String,
    },
    description: {
        type: String
    },
    showtimes: {
        type: String
    },


})
  
 const movieModel = mongoose('movie', movieSchema);
 module.export = movieModel;
 