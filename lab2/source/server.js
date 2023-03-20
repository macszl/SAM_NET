const express = require('express')

const app = express()

app.get('/', (req, res) => {
    let sentText = "";
    
    if(req.query.audioPlayer)
    {
      sentText += `<audio id=audioPlayer src=` + res.query.audioPlayer + `> </audio>`
    }

    if(req.query.videoPlayer)
    {
      sentText += `<video id=videoPlayer src=` + res.query.videoPlayer + `> </video>`
    }

    let videoCancelButton = `<button id=videoCancel onclick= ></button>`
    let audioCancelButton = `<button id=audioCancel onclick= ></button>`
    res.send(sentText);
})

app.listen(4080)
