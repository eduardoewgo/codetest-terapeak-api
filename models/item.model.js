const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: {type: String, required: true},
    description: String,
    price: {type: Number, required: true},
    location: {type: String, required: true},
    condition: {type: String, enum: ['New', 'Used', 'Well worn'], required: true},
    image: {type: String, required: true}, // This would probably be an array of images, but I'll keep it simple.
    createdAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('item', schema);
