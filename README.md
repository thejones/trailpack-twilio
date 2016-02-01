# trailpack-twilio

## WIP DO NOT USE
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
Now you can send emails like this : 

```
this.app.services.TwilioService.sendMessage({
      to: '555-555-5555', 
      from: '555-555-5555', 
      body: 'Hello world.', 
      mediaUrl: '', 
    }, (err, info) => {

    })
```

## License
[MIT](https://github.com/jaumard/trailpack-twilio/blob/master/LICENSE)

