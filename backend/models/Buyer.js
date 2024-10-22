// const mongoose = require('mongoose');

// const BuyerSchema = new mongoose.Schema({
//     firstName: { type: String, required: true },
//     lastName: { type: String, required: true },
//     address: { type: String, required: true },
//     phoneNumber: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
// });

// module.exports = mongoose.model('Buyer', BuyerSchema);
const mongoose = require('mongoose');

const BuyerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Buyer = mongoose.model('Buyer', BuyerSchema);
module.exports = Buyer;
