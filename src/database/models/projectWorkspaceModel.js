const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectWorkspaceBoardSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    title: {
      type: String,
      maxLength: 20,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'project workspace board',
  ProjectWorkspaceBoardSchema
);
