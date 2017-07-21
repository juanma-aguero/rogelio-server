var IncomingWebhook = require('@slack/client').IncomingWebhook;

var url = process.env.SLACK_WEBHOOK_URL || 'https://hooks.slack.com/services/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'; //see section above on sensitive data

var webhook = new IncomingWebhook(url);

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

        webhook.send(message, function (err, header, statusCode, body) {
            if (err) {
                console.log('Error:', err);
            } else {
                console.log('Received', statusCode, 'from Slack');
            }
        });

        return true;
    }
};
