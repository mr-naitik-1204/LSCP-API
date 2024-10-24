const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    Categoryid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cetegory",
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', Schema); 