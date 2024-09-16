let mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String},
    price: { type: String },
    brand: { type: String },
    countInStock: { type: Number, default: 0 },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    images: String
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;