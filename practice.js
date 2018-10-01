var request = require("request");

// Runs request
request("http://www.omdbapi.com/?t=star+wars&y=&plot=short&apikey=6d632cbe", function(error, response, body) {

    // Logs IMBDRating of Star Wars
    console.log("Star Wars is rated:" + JSON.parse(body).imdbRating);
  });
