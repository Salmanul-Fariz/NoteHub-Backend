const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

const UserSchema = new Schema(
  {
    'user-name': {
      type: String,
      unique: true,
      minlength: 4,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
    },
    'email-token': {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
    verify: {
      type: Boolean,
      default: false,
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
