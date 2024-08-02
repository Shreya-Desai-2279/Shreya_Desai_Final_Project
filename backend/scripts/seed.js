const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Burger Meal',
    category: 'Meal',
    description: 'This is a meal containing burger, fries and coke',
    price: 10,
    imageUrl: '/images/burger_meal.jpg'
  },
  {
    name: 'Spaghetti',
    category: 'Snacks',
    description: 'Freshly cooked spaghetti from the house of Italy',
    price: 20,
    imageUrl: '/images/spaghetti.jpg'
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
