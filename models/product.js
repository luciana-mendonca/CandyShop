const mongoose = require('mongoose');
const Schema = mongoose.schema;

const schema - new Schema({
  imagePath: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true},
});

model.exports = mongoose.model('Product', schema);
