const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectWorkspaceBoardSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    boardName: {
      type: String,
    },
    projectType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'Project-workspace-board',
  ProjectWorkspaceBoardSchema
);
