# trailpack-twilio

## WIP
# Currently only sends sms message
:package: Add a Trails service to sending sms messages

## Intallation
With yo : 

```
npm install -g yo generator-trails
yo trails:trailpack trailpack-twilio
```

With npm (you will have to create config file manually) :
 
`npm install --save trailpack-twilio`

## Configuration
```js
// config/twilio.js
module.exports = {
  accountSid: '',
  authToken: ''
}
```

## Usage
Now you can send sms like this : 

```
this.app.services.TwilioService.sendMessage({
  to: '+15555555555', 
  from: '+15555555555', 
  body: 'Hello trails world.' 
}, (err, info) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(info)
  return
})
```

## License
[MIT](https://github.com/jaumard/trailpack-twilio/blob/master/LICENSE)

