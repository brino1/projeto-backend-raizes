const express = require('express');
const router = express.Router();
const Order = require('../domain/Order');

// Rota para registrar um novo pedido
router.post('/create', async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: 'Erro ao registrar pedido', message: error.message });
  }
});

// Rota para listar todos os pedidos (Para a cozinha ver)
router.get('/all', async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

module.exports = router;
