var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var addrSchema = mongoose.Schema({
  address: { type: String, unique: true , uniqueCaseInsensitive: true }
});
addrSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Address', addrSchema);
