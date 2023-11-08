const mongoose = require('mongoose')

const OrderSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    total: {
        type: Number,
        required: true
    },
    content: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now 
    }

})

module.exports = mongoose.model("Orders", OrderSchema)