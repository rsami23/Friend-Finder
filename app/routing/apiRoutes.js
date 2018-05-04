// REQUIRED DEPENDENCIES
var path = require("path");

// IMPORT FRIENDS 
var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    })

    app.post("/api/friends", function(req, res) {
        var newUser = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;

        // RUN THROUGH ALL CURRENT FRIENDS 
        for (var i = 0; i < friends.length; i++) {
        var diffScores = 0;

        // RUN THROUGH NEW USER INPUTED SCORES
        for (var j = 0; j < newUser.length; j++) {
            diffScores += (Math.abs(parseInt(friends.scores[i] - parseInt(newUser.scores[j]))));
        }

        // PUSH RESULTS INTO SCORES ARRAY
        scoresArr.push(diffScores);
    }

        // FIND THE BEST MATCH
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]){
                bestMatch = i;
            }
        }
        
        // RETURN MATCH
        var newMatch = friends[bestMatch];
        res.json(newMatch);

        friends.push(req, body);     
    });   
};


 
    