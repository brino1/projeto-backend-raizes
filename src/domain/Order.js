const { DataTypes } = require('sequelize');
const sequelize = require('../infrastructure/database');

const Order = sequelize.define('Order', {
  clienteNome: { type: DataTypes.STRING, allowNull: false },
  canalPedido: { 
    type: DataTypes.ENUM('APP', 'TOTEM', 'BALCAO', 'WHATSAPP'), 
    allowNull: false 
  },
  status: { 
    type: DataTypes.ENUM('RECEBIDO', 'PREPARANDO', 'PRONTO', 'ENTREGUE'), 
    defaultValue: 'RECEBIDO' 
  },
  valorTotal: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = Order;
