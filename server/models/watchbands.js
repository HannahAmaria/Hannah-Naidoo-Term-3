const mongoose = require('mongoose')

const WatchSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    manufacturer: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }

})

module.exports = mongoose.model("Watch", WatchSchema)