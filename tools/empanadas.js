var slack = require('../services/slack');

var description = {
    name: "Empanadas",
    version: "1.0"
};

const STATUS_IN_PROGRESS = 'in_progress';
const STATUS_CLOSED = 'closed';

var tiposDeEmpanadas = [
    'Jamon y Queso',
    'Verdura',
    'Pollo',
    'Carne'
];

var pedido = {
    status: STATUS_CLOSED,
    available_types: tiposDeEmpanadas,
    items: []
};

var addToPedido = function (variedad) {
    var found = false;
    for (var i = 0; i < pedido.items.length; i++) {
        var item = pedido.items[i];
        if (item.name == variedad) {
            item.quantity++;
            found = true;
            break;
        }
    }
    if (!found) {
        pedido.items.push({
            name: variedad,
            quantity: 1
        });
    }
}

module.exports = {

    getDescription: function () {
        return description;
    },

    abrirPedido: function () {
        pedido.status = STATUS_IN_PROGRESS;
        pedido.items = [];
        return pedido;
    },

    cerrarPedido: function () {
        pedido.status = STATUS_CLOSED;
        return pedido;
    },

    agregarPedido: function (variedad) {
        addToPedido(variedad);
        return pedido;
    },

    getStatus: function () {
        return pedido;
    }
};
