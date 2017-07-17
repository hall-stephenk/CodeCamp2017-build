'use strict';
module.exports = {
    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, "That's a great question!");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },
};
