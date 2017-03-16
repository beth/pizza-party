var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var pizzaSchema = mongoose.Schema({
  quantity: Number,
  sauce: String,
  topping1: String,
  topping2: String,
  topping3: String,
  price: Number
});

var Pizza = mongoose.model('Pizza', pizzaSchema);

var selectAll = function(callback) {
  Pizza.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;