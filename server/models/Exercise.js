const { Schema, model } = require('mongoose');
// const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const exerciseSchema = new Schema(
  {
    exerciseName: {
      type: String,
      required: 'You need to provide a name for your exercise',
      minlength: 1,
      maxlength: 280
    },
    weight: {
      type: Number,
      require: 'Please enter the weight for this exercise'

    },
    repetitions: {
      type: Number,
      required: 'How many reps did you do?'
    },
    notes: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
    // ,
    // username: {
    //   type: String,
    //   required: true
    // },
    // reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

// thoughtSchema.virtual('reactionCount').get(function() {
//   return this.reactions.length;
// });

const Exercise = model('Exercise', exerciseSchema);

module.exports = Exercise;
