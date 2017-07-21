var slack = require('../services/slack');

var description = {
    name: "Empanadas",
    version: "1.0"
};

const STATUS_IN_PROGRESS = 'in_progress';
const STATUS_CLOSED = 'closed';

var pedido = {
    status: STATUS_CLOSED,
    items: [
        {
            name: 'jyq',
            quantity: 2
        },
        {
            name: 'carne',
            quantity: 4
        }
    ]
};

module.exports = {

    getDescription: function () {
        return pedido;
    },

    abrirPedido: function () {
        pedido.status = STATUS_IN_PROGRESS;
        pedido.items = [];
        return pedido;
    },

    getStatus: function () {
        return pedido;
    }
};
