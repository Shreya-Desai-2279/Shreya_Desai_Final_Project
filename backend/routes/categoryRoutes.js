// const express = require('express');
// const router = express.Router();
// const Category = require('../models/Category');

// // Get all categories
// router.get('/', async (req, res) => {
//   try {
//     const categories = await Category.find();
//     res.json(categories);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// // Add a new category
// router.post('/', async (req, res) => {
//   const category = new Category({ name: req.body.name });
//   try {
//     const newCategory = await category.save();
//     res.status(201).json(newCategory);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// // Delete a category
// router.delete('/:id', async (req, res) => {
//   try {
//     const category = await Category.findById(req.params.id);
//     if (category == null) {
//       return res.status(404).json({ message: 'Cannot find category' });
//     }
//     await category.remove();
//     res.json({ message: 'Deleted category' });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Category = require('../models/Category');

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

// Add a new category
router.post('/', async (req, res) => {
  const category = new Category({ name: req.body.name });
  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// Update a category
router.put('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: 'Cannot find category' });
    }

    category.name = req.body.name;

    const updatedCategory = await category.save();
    res.json(updatedCategory);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: err.message });
  }
});

// Delete a category
router.delete('/:id', async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category == null) {
      return res.status(404).json({ message: 'Cannot find category' });
    }
    await category.remove();
    res.json({ message: 'Deleted category' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;



