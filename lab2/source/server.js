const express = require('express')
var app = express()


app.get('/', (req, res) => {
    let sentText = "";
    let audioFile = req.query.audioFile;
    let videoFile = req.query.videoFile;
    let imgFile = req.query.imgFile;

    let audioPlayerId = "audioPlayer";
    let videoPlayerId = "videoPlayer";

    if(audioFile !== undefined)
    {
      
      sentText += (`<audio id="audioPlayer" src="` + audioFile + `"> </audio>`);
      sentText += (`<button id="audioCancel" onclick=changeOnSrc(` + audioPlayerId + `> Cancel audio </button>`);
    }

    if(videoFile !== undefined)
    {
      sentText += (`<video id="videoPlayer" src="` + videoFile + `"> </video>`);
      sentText += (`<button id="videoCancel" onclick=changeOnSrc(` + videoPlayerId + `)> Cancel video </button>`);
    }

    if(imgFile)
    {
      sentText += (`<img id="posterImage" src="` + imgFile +  `"></img>`);
    }

    sentText += (`<script>
      function changeOnSrc(id)
      {
        if(id === "audioPlayer"){
          Document.getElementById(id).src = cancel.mp3; 
        }
        else { 
          Document.getElementById(id).src = cancel.mp4;
        }
      }
    </script>`)
    res.send(sentText);
})

app.listen(4081)
