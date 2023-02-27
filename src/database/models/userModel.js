const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
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
    emailToken: {
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
    googleAuth: {
      type: Boolean,
      default: false,
    },
    fullName: {
      type: String,
      default: null,
    },
    profilePhoto: {
      type: String,
      default: null,
    },
    workSpaces: {
      projectWorkspace: {
        name: { type: String, default: 'My Space' },
        boards: [
          {
            type: Schema.Types.ObjectId,
            default: null,
            ref: 'ProjectWorkspaceBoard',
          },
        ],
      },
      userWorkspace: {
        name: { type: String, default: 'My Book' },
        icon: { type: String, default: 'closed_book' },
        pages: [
          {
            type: Schema.Types.ObjectId,
            default: null,
            ref: 'UserWorkspacePage',
          },
        ],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema);
