const mongoose = require('mongoose');

const shortenSchema = mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    shorten_code: {
        type: String,
        required: true,
        maxLength: 6
    },
    clicks: {
        type: Number,
        default: 0
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: Date 

});

module.exports = mongoose.model('shorten', shortenSchema);