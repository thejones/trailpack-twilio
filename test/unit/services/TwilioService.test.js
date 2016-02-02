'use strict'

const assert = require('assert')

describe('TwilioService', () => {
  it('should exist', (done) => {
    assert(global.app.api.services.TwilioService)
    assert(global.app.services.TwilioService)
    assert(global.app.services.TwilioService.sendMessage)
    /*
     global.app.services.TwilioService.sendMessage(message, (err, response) => {
     assert(response)
     done()
     })*/
    done()
  })
})

