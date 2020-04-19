let req = {
    body: {
        "results": [
          {
            "from": "385919998888",
            "to": "41793026731",
            "integrationType": "WHATSAPP",
            "receivedAt": "2019-07-19T11:21:27.861+0000",
            "messageId": "ABEGOFl3VCQoAhAqnlmSd2FKPOaraEaS0rPQ",
            "pairedMessageId": null,
            "callbackData": null,
            "message": {
              "type": "TEXT",
              "text": "Kurir In Senopati"
            },
            "price": {
              "pricePerMessage": 0,
              "currency": "EUR"
            }
          }
        ],
        "messageCount": 1,
        "pendingMessageCount": 0
    }
}

let messageCount = req.body.messageCount
for(let key = 0; key < messageCount; key++){
    let user_phone = req.body.results[key].from
    console.log(user_phone)
    let message = req.body.results[key].message.text
    console.log(message)
    let textCode = ["kurir", "in", "out", "done"]
    let messArr = message.toLowerCase().split(" ")
    console.log(messArr)

    if(messArr[0] == textCode[0]){
        console.log(messArr[0])
        
        // in
        if(messArr[1] == textCode[1]){
            console.log(messArr[1])
        }
        // out
        else if (messArr[1] == textCode[2]){
            console.log(messArr[1])
        }
        //done
        else if (messArr[1] == textCode[3]){
            console.log(messArr[1])
        }

    }
}