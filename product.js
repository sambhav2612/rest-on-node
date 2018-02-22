var mongoose = require('mongoose');
var schema = mongoose.Schema;
var productSchema = new schema({
    title: String,
    price: Number,
    instock: Boolean,
    quantity: Number,
    image: String
});

module.exports = mongoose.model('Product', productSchema);