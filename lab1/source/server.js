const express = require('express')

const app = express()

app.get('/', (req, res) => {
    let sentText = "";
    let audioFile = req.query.audioFile;
    let videoFile = req.query.videoFile;
    let imgFile = req.query.imgFile;
    if(audioFile !== undefined)
    {
      sentText += (`<audio id="audioPlayer" src="` + audioFile + `"> </audio>`);
    }

    if(videoFile !== undefined)
    {
      sentText += (`<video id="videoPlayer" src="` + videoFile + `"> </video>`);
    }

    res.send(sentText);
})

app.listen(4080)
