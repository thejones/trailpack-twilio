'use strict'

const Trailpack = require('trailpack')

module.exports = class Twilio extends Trailpack {

  /**
   * Check configuration file
   */
  validate() {
    if (!this.app.config.twilio) {
      return Promise.reject(new Error('There no twilio.js under ./config, check it\'s load in ./config/index.js or create it !'))
    }

    return Promise.resolve()
  }

  /**
   * Configure twilio
   */
  configure() {
    return Promise.resolve()
  }

  constructor(app) {
    super(app, {
      config: require('./config'),
      api: require('./api'),
      pkg: require('./package')
    })
  }
}

