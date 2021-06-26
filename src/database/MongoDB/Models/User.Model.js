const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },

  userType: {
    type: String,
  },

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  status: {
    type: String,
  },

  createdBy: {
    Type: String,
  },

  updatedBy: {
    Type: String,
  },

  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
