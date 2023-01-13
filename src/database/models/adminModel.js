const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    'user-name': {
      type: String,
      unique: true,
      minlength: 4,
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('admin', AdminSchema);
