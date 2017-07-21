var slack = require('../services/slack');

var description = {
    name: "Empanadas",
    version: "1.0"
};

var pedido = {
    status: 'in progress',
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
        return description;
    },
    getStatus: function () {
        return pedido;
    }
};
