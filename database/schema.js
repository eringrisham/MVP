const mongoose = require('mongoose');

let dogSchema = mongoose.Schema({
  id: {type: Number, unique : true },
  name: String,
  url: String
});

const Dog = mongoose.model('Dog', dogSchema);

module.exports = Dog;