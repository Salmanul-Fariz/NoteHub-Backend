const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProjectWorkspaceBoardSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    tasks: {
      todo: [
        {
          taskName: String,
          roleName: String,
          updateTime: Date,
        },
      ],
      progress: [
        {
          taskName: String,
          roleName: String,
          updateTime: Date,
        },
      ],
      completed: [
        {
          taskName: String,
          roleName: String,
          updateTime: Date,
        },
      ],
    },
    roles: [{ name: String, color: String }],
    contributors: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        role: { type: String },
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
