require('dotenv').config()
// var Slack = require('node-slack');
// let hook_url = 'https://learningcode-org.slack.com'
// var slack = new Slack(hook_url);
// let result = slack.send({
//             text: 'Hello Howdy!',
//             channel: '#general',
//             username: 'slackapptest'
//         });
// console.log(result)

const { WebClient } = require('@slack/web-api');

// An access token (from your Slack app or custom integration - xoxp, xoxb)
const token = process.env.XOXB;

const web = new WebClient(token);

let conversationId = [];
web.channels.list()
   .then(res => {
    for(let i = 0; i < res.channels.length; i++){
        conversationId.push(res.channels[i].id)
    }
     console.log('Channels', res);

     for(let key = 0; key < conversationId.length; key++){
    
        (async () => {
          // See: https://api.slack.com/methods/chat.postMessage
          const res = await web.chat.postMessage({ channel: conversationId[key], text: 'Hello there '+key });
        
          // `res` contains information about the posted message
          console.log('Message sent: ', res.ts);
        })();
    
    }

})


// This argument can be a channel ID, a DM ID, a MPDM ID, or a group ID
if(conversationId.length !== 0 ){
    for(let key = 0; key < conversationId.length; key++){
    
        (async () => {
          // See: https://api.slack.com/methods/chat.postMessage
          const res = await web.chat.postMessage({ channel: conversationId[key], text: 'Hello there '+key });
        
          // `res` contains information about the posted message
          console.log('Message sent: ', res.ts);
        })();
    
    }

}



