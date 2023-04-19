const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');

// Get current shopping list
router.get('/list', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send(user.shoppingList);
  } catch (e) {
    res.status(500).send({ message: 'Error in fetching shopping list' });
  }
});

// Add a new item to shopping list
router.post('/add', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.shoppingList.push(req.body.item);
    await user.save();
    res.send(user.shoppingList);
  } catch (e) {
    res.status(500).send({ message: 'Error in adding item to shopping list' });
  }
});

// Delete an item from shopping list
router.delete('/delete', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.shoppingList = user.shoppingList.filter(item => item !== req.body.item);
    await user.save();
    res.send(user.shoppingList);
  } catch (e) {
    res.status(500).send({ message: 'Error in deleting item from shopping list' });
  }
});

module.exports = router;