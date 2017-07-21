var openoffice = require('../tools/openoffice');
var empanadas = require('../tools/empanadas');

var tools = [];

tools.push(openoffice.getDescription());
tools.push(empanadas.getDescription());


module.exports = {
    getActiveTools: function () {
        return tools;
    }
};
