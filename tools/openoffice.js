var slack = require('../services/slack');

var description = {
    name: "Open Office",
    version: "1.0"
};

var officeStatus = {
    status: "closed",
    openedBy: "nobody"
};

module.exports = {
    getDescription: function () {
        return description;
    },
    getStatus: function () {
        return officeStatus;
    },
    setStatus: function (status, openedBy) {
        officeStatus.status = status;
        officeStatus.openedBy = openedBy;

        var message = openedBy;
        if (status == 'open') {
            message += " abrió la oficina.";
        } else {
            message += " cerró la oficina.";
        }

        slack.send(message);

        return true;
    }
};
