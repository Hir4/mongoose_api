const express = require('express');
const router = express.Router();
const Enterprise = require('../models/enterprise');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const clients = await Enterprise.find();
    res.json(clients);
  } catch (err) {
    res.status(500).res.json({ message: err.message })
  }
});

// Get client with id
router.get('/:id', getClient, (req, res) => {
  res.send(req.client);
});

// Create new client
router.post('/', async (req, res) => {
  const client = new Enterprise({
    name: req.body.name,
    age: req.body.age,
    salary: req.body.salary
  });
  try {
    const newClient = await client.save();
    res.status(201).json(newClient);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a client
router.patch('/:id', getClient, async (req, res) => {
  if (req.body.name != null) {
    req.client.name = req.body.name;
  }
  if (req.body.age != null) {
    req.client.age = req.body.age;
  }
  if (req.body.salary != null) {
    req.client.salary = req.body.salary;
  }
  try {
    const updateClient = await req.client.save();
    res.json(updateClient);
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
});

// Delete a client
router.delete('/:id', getClient, async (req, res) => {
  try {
    await req.client.remove();
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware to avoid repetition and get the client and then move to the next section of the code
async function getClient(req, res, next) {
  let client;
  try {
    client = await Enterprise.findById(req.params.id);
    if (client === null) {
      return res.status(404).json({ message: "Cannot find the client" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  req.client = client;
  next();
}

module.exports = router;