const mongoose = require('mongoose');

const schema = mongoose.Schema;

var membersSchema = new schema ({
    firstname : String,
    number: String,
    email: String,
    password: String,
    address: Array,
    cart: Array,
    wallet: Number
});

module.exports = mongoose.model('Members', membersSchema);