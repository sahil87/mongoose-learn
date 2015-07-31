// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(callback) {
  console.log("Yay!");
});

var tournamentSchema = mongoose.Schema({
  name: String
});

tournamentSchema.methods.getListOfMatches = function () {
  console.log("The name of this tournament is " + this.name);
};


var Tournament = mongoose.model('Tounament', tournamentSchema);

var tournament1 = new Tournament({
  name: 'tournament1Name'
});

tournament1.save(function(err, tournament) {
  if (err) return console.error(err);
  tournament.getListOfMatches();
});

Tournament.find({name: /^tournam/}, function(err, tournaments) {
  if(err) return console.error(err);
  console.log(tournaments);
});
