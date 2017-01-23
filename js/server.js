// import express from 'express';
var express = require('express')
// import bodyParser from 'body-parser';
var bodyParser = require('body-parser')

//test
var cors = require('cors')
//test

const app = express ();
app.use(express.static('build'));
app.use(bodyParser.json());

//test
app.use(cors())
//test

const guesses = [];
console.log('these are the guesses', guesses)

app.get('/fewest-guesses', function (req, res){
  let fewestGuesses = Math.min.apply(Math, guesses);
  res.status(200).json(fewestGuesses)
});

app.post('/fewest-guesses', function (req, res){
  console.log('this is the body', req.body)
  guesses.push(req.body.guessCount);
  let fewestGuesses = Math.min.apply(Math, guesses);
  console.log('this is the response', res.fewestGuesses)
  res.status(200).json(fewestGuesses)

});

// listen for requests
const port = 8090
const runServer = function(callback) {
    app.listen(port, function() {
        console.log('Listening on localhost/' + port);
    });
};

if (require.main === module) {
    runServer(function(err) {
        if (err) {
            console.error(err);
        }
    });
};

exports.app = app;
exports.runServer = runServer;
