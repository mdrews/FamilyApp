const express = require('express');
const router = express.Router();
const Item = require('../../models/Item');

router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(item => res.json({ item }));
});

router.post('/', (req, res) => {
  console.log('/api/item POST');
  console.log(req.body.name);
  const newItem = new Item({ name: req.body.name });
  newItem.save()
    .then(item => res.json(item))
});

router.delete('/:id', (req, res) => {
  Item.findByIdAndDelete(req.params.id)
    .then(() => res.json({ success: true }))
    .catch(error => res.json({ success: false, error }));
});

module.exports = router;