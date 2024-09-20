const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    bookTitle : String, 
    authorName : String,
    imageurl : String,
    category : String,
    bookDescription : String,
    bookpdfurl : String,
})

module.exports = mongoose.model('store', storeSchema);