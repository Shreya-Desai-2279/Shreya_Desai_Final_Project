const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Product 1',
    category: 'Snacks',
    description: 'Description for Product 1',
    price: 10,
    imageUrl: 'https://unsplash.com/photos/a-store-front-with-a-bunch-of-records-on-display-K7CzpLdbYM4'
  },
  {
    name: 'Product 2',
    category: 'Beverages',
    description: 'Description for Product 2',
    price: 20,
    imageUrl: 'https://unsplash.com/photos/a-red-door-with-a-no-loitering-sign-on-it-hVlbFE46Qi0'
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
