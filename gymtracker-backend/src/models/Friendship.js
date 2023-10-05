const mongoose = require('mongoose');

const FriendshipSchema = new mongoose.Schema({
  userID1: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  userID2: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  status: String, // e.g., "Pending", "Accepted", "Declined"
});

module.exports = Friendship = mongoose.model('friendship', FriendshipSchema);
