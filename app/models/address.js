var mongoose = require('mongoose');

module.exports = mongoose.model('Address', {
  address: { type: String }
});
