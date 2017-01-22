import express from 'express';
import bodyParser from 'body-parser';

const app = express ();
app.use(express.static('build'));
app.use(bodyParser.json());

const guesses = [];
console.log('these are the fewest guesses', guesses)

app.get('/fewest-guesses', function (req, res){
  let fewestGuesses = Math.min.apply(Math, guesses);
  res.status(200).json(fewestGuesses)
});

app.post('/fewest-guesses', function (req, res){
  guesses.push(req.body.guess);
  let fewestGuesses = Math.min.apply(Math, guesses);
  res.status(200).json(fewestGuesses)
});

// listen for requests
const runServer = function(callback) {
    app.listen(8080, function() {
        console.log('Listening on localhost');
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
