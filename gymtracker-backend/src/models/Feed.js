const mongoose = require('mongoose');

const FeedSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  postContent: String,
  likes: Number,
  comments: [
    {
      comment: String,
      commenterID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    },
  ],
});

module.exports = Feed = mongoose.model('feed', FeedSchema);
