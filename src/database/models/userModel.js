// Require packages
const mongoose = require('mongoose');

// Require functions
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    'user-name': {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    'work-spaces': {
      'project-workspace': { type: Array, default: null },
      'user-workspace': { type: Array, default: null },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user', UserSchema);
