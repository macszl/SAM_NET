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
    res.send(sentText);
})

app.listen(4080)
