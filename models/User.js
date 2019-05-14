const mongoose = require('../db/connection.js');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: String,
    mobile: String,
    favRestaurants: [Schema.Types.ObjectId]
});
module.exports = mongoose.model('User', User);