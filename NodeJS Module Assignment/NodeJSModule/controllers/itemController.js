// controllers/itemController.js
const Item = require('../models/Item');

exports.createItem = async (req, res) => {
  const { name, description, price } = req.body;
  if (!name || !price) return res.status(400).json({ message: 'Name and price are required' });

  try {
    const item = await Item.create({ name, description, price });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.getItem = async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json({ message: 'Item deleted' });
};
