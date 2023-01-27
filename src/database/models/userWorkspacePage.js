const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserWorkspacePageSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    title: {
      type: String,
      default: 'Untitled',
    },
    icon: {
      type: String,
      default: null,
    },
    converImg: {
      url: {
        type: String,
        default: null,
      },
      position: {
        x: Number,
        y: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('admin', UserWorkspacePageSchema);
