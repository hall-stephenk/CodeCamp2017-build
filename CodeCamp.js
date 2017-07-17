'use strict';

// -----------------------------------------------------------------------------
// BASIC SETUP STUFF - DON'T CHANGE THIS
// -----------------------------------------------------------------------------
var botData = require('./data/bot');

module.exports = {
    botData: botData,

    message_received: function(message, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, 'Hi there.');

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },

    question_received: function(question, channelName, userName, Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        Slack.postMessageToChannel(channelName, "That's a great question!");

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },

    bored: function(Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        return;

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },

    logged_in: function(Slack) {
        // *********************************************************************
        // CODE HERE!
        // *********************************************************************

        return;

        // *********************************************************************
        // STOP CODING!
        // *********************************************************************
    },

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