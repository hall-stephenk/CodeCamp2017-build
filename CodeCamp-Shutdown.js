'use strict';
module.exports = {
    shutdown_received: function(channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToUser(userName, "Your wish is my command...shutting down now.");
        Slack.postMessageToChannel(channelName, "See you later!");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
