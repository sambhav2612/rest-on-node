var mongoose = require('mongoose');
var schema = mongoose.Schema;
var productSchema = new schema({
    title: String,
    price: Number,
    instock: Boolean,
    image: String
});

module.exports = mongoose.model('Product', productSchema);