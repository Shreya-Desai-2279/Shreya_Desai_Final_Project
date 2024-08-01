const mongoose = require('mongoose');
const Product = require('../models/Product');  // Adjust the path if necessary
require('dotenv').config();

const products = [
  {
    name: 'Product 1',
    category: 'Category 1',
    description: 'Description for Product 1',
    price: 10,
    imageUrl: 'http://example.com/product1.jpg'
  },
  {
    name: 'Product 2',
    category: 'Category 2',
    description: 'Description for Product 2',
    price: 20,
    imageUrl: 'http://example.com/product2.jpg'
  },
  // Add more products as needed
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    return Product.insertMany(products);
  })
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
