const mongoose = require('mongoose');

const ExerciseSchema = new mongoose.Schema({
  name: String,
  unit: String,
});

module.exports = Exercise = mongoose.model('exercise', ExerciseSchema);
