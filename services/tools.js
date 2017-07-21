var openoffice = require('../tools/openoffice');

var tools = [];

tools.push(openoffice.getDescription());


module.exports = {
    getActiveTools: function () {
        return tools;
    }
};
