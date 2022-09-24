// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')('AC70439e5a17c1a33dc787adc8f1e74a49', 'dc6dd084aa5655fc6a2e3b4ce80875b7');

// client.messages
//   .create({
//      body: 'Here is your new cat!',
//      from: '+19289626641',
//      mediaUrl: ['https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'],
//      to: '+14133131229'
//    })
//   .then(message => console.log(message.status));

// messages to multiple people

var numbersToMessage = ["+13154403465", "+14133131229", "+15186505620"]

numbersToMessage.forEach(function(number){
  var message = client.messages.create({
    body: 'Hello. This is a test.',
    from: '+19289626641',
    mediaUrl: ['https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'],
    to: number
  })
  .then(message =>  console.log(message.status))
  .done();
});