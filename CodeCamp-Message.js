'use strict';

module.exports = {
    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, 'Hi there.');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
