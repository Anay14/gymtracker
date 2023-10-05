const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  email: String,
  phone: String,
});

module.exports = User = mongoose.model('user', UserSchema);
