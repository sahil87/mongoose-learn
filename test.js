var mongoose = require('mongoose');
//mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/test');

var Cat = mongoose.model('Cat', { name: { type:String, unique: true }});

var kitty = new Cat({ name: 'Zildjian1' });
kitty.save(function (err, kittySave, numberAffected) {
  if (err) {
    console.log(err);
  } // ...
  console.log('meow within callback' + numberAffected);
});
console.log('meow outside callback');
