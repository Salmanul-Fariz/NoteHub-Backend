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
      maxLength: 20,
    },
    icon: {
      type: String,
      default: 'page_with_curl',
    },
    coverImg: {
      url: {
        type: String,
        default: null,
      },
      positionY: {
        type: Number,
        default: '0',
      },
    },
    page: [],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserWorkspacePage', UserWorkspacePageSchema);
