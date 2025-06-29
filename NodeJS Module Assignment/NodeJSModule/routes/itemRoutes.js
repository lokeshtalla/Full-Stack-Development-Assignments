// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  createItem,
  getItems,
  getItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', auth, createItem);
router.put('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);

module.exports = router;
