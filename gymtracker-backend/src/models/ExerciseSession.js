const mongoose = require('mongoose');

const ExerciseSessionSchema = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  exerciseID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'exercise',
  },
  date: Date,
  subSessions: [
    {
      sets: [
        {
          weight: Number,
          reps: Number,
        },
      ],
    },
  ],
});

module.exports = ExerciseSession = mongoose.model('exerciseSession', ExerciseSessionSchema);
