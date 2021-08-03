/** @format */

const mongoose = require('mongoose');

const { ObjectId } =  mongoose.Schema; 

const walletSchema = new mongoose.Schema({
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

