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
        return true;
    }
};
