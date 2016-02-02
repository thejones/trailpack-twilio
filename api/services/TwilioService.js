'use strict'

const Service = require('trails-service')
const _ = require('lodash')

/**
 * @module EmailService
 * @description Trails Service to send emails
 */
 module.exports = class TwilioService extends Service {
  sendMessage(data, next) {
    const client = require('twilio')(this.app.config.twilio.accountSid, this.app.config.twilio.authToken)

    if (!data.body && !data.mediaUrl) {
      return next('No body or media URL provided');
    }

    let message = _.pickBy({
      to: data.to,
      from: data.from,
      body: data.body,
      mediaUrl: data.mediaUrl
    }, _.identity)

    client.messages.create(message, function(err, response) {
      if (err) return next(err);
      return next(response);
    });
  }


}


