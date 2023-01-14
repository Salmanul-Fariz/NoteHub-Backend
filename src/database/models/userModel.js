const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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
      default: null,
    },
    password: {
      type: String,
      minlength: 6,
      select: false,
    },
    verify: {
      type: Boolean,
      default: false,
    },
    'google-auth': {
      type: Boolean,
      default: false,
    },
    'full-name': {
      type: String,
      default: null,
    },
    'profile-photo': {
      type: String,
      default: null,
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
