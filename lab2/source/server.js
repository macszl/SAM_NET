const express = require('express')
var app = express()


app.get('/', (req, res) => {
    let sentText = "";
    let audioFile = req.query.audioFile;
    let videoFile = req.query.videoFile;
    let imgFile = req.query.imgFile;
    if(audioFile !== undefined)
    {
      
      sentText += (`<audio id="audioPlayer" src="` + audioFile + `"> </audio>`);
      sentText += (`<button id="audioCancel" onclick="changeOnSrc("audioPlayer", "cancel.mp3")"> Cancel audio </button>`);
    }

    if(videoFile !== undefined)
    {
      sentText += (`<video id="videoPlayer" src="` + videoFile + `"> </video>`);
      sentText += (`<button id="videoCancel" onclick="changeOnSrc("videoPlayer", "cancel.mp4") "> Cancel video </button>`);
    }

    if(imgFile)
    {
      sentText += (`<img id="posterImage" src="` + imgFile +  `"></img>`);
    }

    sentText += (`<script>
      function changeOnSrc(id, onClickValue)
      {
        element = Document.getElementById(id);
        element.src = onClickValue; 
      }
    </script>`)
    res.send(sentText);
})

app.listen(4080)
