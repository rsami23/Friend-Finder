// REQUIRED DEPENDENCIES
var path = require("path");

// IMPORT FRIENDS 
var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var newUser = req.body;
        var userResponses = newUser.scores;

        var matchName = "";
        var matchPhoto = "";
        var totalDifference = 100000;

        for (var i = 0; i < friends.length; i++) {
            var difference = 0;
            for (var j = 0; j < userResponses.length; i++) {
                diff += Math.abs(friends[i].scores[j] - userResponses[j]);
            }

            if (difference < totalDifference) {
                totalDifference = difference;
                matchName = friends[i].name;
                matchPhoto = friends[i].photo;
            }
        }

        friends.push(newUser);
        res.json({status: "OK", matchName: matchName, matchPhoto: matchPhoto});
    });   
};


 
    