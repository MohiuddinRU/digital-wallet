/** @format */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://root:VrIN2J6BXmT6cw8q@cluster0.xczmd.mongodb.net/summer?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const ObjectId = Schema.ObjectId;

const walletSchema = new Schema({
  userId: String,
  currency: String,
  walletNumber: Number,
  balance: Number,
  active: Boolean,
});

const walletModel = mongoose.model('Wallet', walletSchema);

exports.checkWalletNumberDuplicacy = async (walletNumber) => {
  return await walletModel.findOne({ walletNumber });
};

exports.checkWalletDuplicacy = async (userId, currency) => {
  return await walletModel.findOne({ userId, currency });
};

exports.create = async (walletInfo) => {
  return await walletModel.create(walletInfo);
};


exports.findWalletNumber = async (walletId, userId) => {
  //return { walletNumber: "5789485632", currency: "USD", balance: 1689.0 };
  return await walletModel.findOne({ _id: walletId, userId });
};
exports.findWallet = async (userId) => {
  return await walletModel.find({ userId });
};

