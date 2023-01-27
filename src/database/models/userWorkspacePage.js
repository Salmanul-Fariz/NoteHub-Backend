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
      default: 'page_with_curl',
    },
    coverImg: {
      url: {
        type: String,
        default: null,
      },
      position: {
        x: { type: Number, default: null },
        y: { type: Number, default: null },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('user workspace page', UserWorkspacePageSchema);
