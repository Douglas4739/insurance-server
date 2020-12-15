const mongoose = require('mongoose');

const item = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    cost: { type: String, required: true },
    photo: { type: URL, required: false },
    desc: { type: String, required: true },
    policy: { type: String, required: true },
});

module.exports = mongoose.model('Item', item);