const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectWorkspaceBoardSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    roles: [{ name: String, color: String }],
    contributors: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        roles: { type: String },
      },
    ],
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
  'ProjectWorkspaceBoard',
  ProjectWorkspaceBoardSchema
);
