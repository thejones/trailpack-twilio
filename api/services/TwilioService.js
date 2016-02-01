'use strict'

const Service = require('trails-service')
const _ = require('lodash')
const client = require('twilio')(accountSid, authToken); 
/**
 * @module EmailService
 * @description Trails Service to send emails
 */
 module.exports = class TwilioService extends Service {
  sendMessage(data, next) {
    if (!data.body && !data.mediaUrl) {
      return next('No body or media URL provided');
    }
    client.messages.create({ 
      to: data.to, 
      from: data.from, 
      body: data.body, 
      mediaUrl: data.mediaUrl,  
    }, function(err, response) { 
      if (err) return next(err);
      return next(response);
    });
  }


}


