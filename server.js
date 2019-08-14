const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cv = require('opencv4nodejs');
const path = require('path');

const devicePort = 1;
const camera = new cv.VideoCapture(devicePort);

const redVideo = new cv.VideoCapture('./media/red.mp4');
const blueVideo = new cv.VideoCapture('./media/blue.mp4');
const tieVideo = new cv.VideoCapture('./media/tie.mp4');

let displayMode = 0;

let app = express();
//app.use(favicon(path.join(__dirname, 'media', favicon.ico')));
app.use(logger('dev'));

let scores = {'red':0, 'blue':0};

app.use("/score/", express.static(path.join(__dirname, 'scoring-build')))

app.get('/score/*', (req, res) => {
  res.sendFile(path.join(__dirname, "scoring-build", "index.html"));
})

app.get('/currentScores', (req, res) => {
  res.status(200).json(scores);
})

app.get('/updateScores', (req, res) => {
  let newScore = parseInt(req.query.score);
  let team = req.query.color;
  if (!scores.hasOwnProperty(team)){
    res.status(400).send("That color doesn't exist!");
  }
  scores[team] = newScore;
  res.status(200).json({"status":"Success"});
})

app.get('/publish', (req, res) => {
  displayMode = 1;
  res.status(200).json({"status":"Success"});
})

app.listen(80, () => {
  console.log("Listening on port 80...")
})

let numDigits = (number) => {
  return (""+number).length
}

let frame;
let updateDisplay = () => {
  let wait = 10;

  if(displayMode == 0){
    frame = camera.read();
  }

  if(displayMode == 1){
    wait = 5;
    if(scores.red > scores.blue){
      frame = redVideo.read();
    }else if (scores.blue > scores.red){
      frame = blueVideo.read();
    }else { //Tie Game
      frame = tieVideo.read();
    }
    if(frame.empty){
      redVideo.reset();
      blueVideo.reset();
      tieVideo.reset();
      displayMode = 2;
      setTimeout(() => {
        displayMode = 0;
        scores.blue = 0;
        scores.red = 0;
      }, 7000);
    }
  }

  if (displayMode == 2) {
    const mat = cv.imread('./media/score-bg2.png');
    mat.putText(
      ""+scores.blue,
      //300 for 1 digit
      new cv.Point(190-(45*numDigits(scores.blue)), 410),
      cv.FONT_HERSHEY_SIMPLEX,
      5, //font size
      new cv.Vec(255,255,255),
      15, //thickness
      cv.LINE_4,
      0
    )
    mat.putText(
      ""+scores.red,
      new cv.Point(760-(45*numDigits(scores.red)),410),
      cv.FONT_HERSHEY_SIMPLEX,
      5, //font size
      new cv.Vec(255,255,255),
      15, //thickness
      cv.LINE_4,
      0
    )
    frame = mat;
  }
  if(!frame.empty){
  if(displayMode == 1){
    frame = frame.resize(768, Math.floor(frame.cols/frame.rows*768), cv.INTER_AREA)
  }else {
    frame = frame.resize(Math.floor(frame.rows/frame.cols*1024), 1024, cv.INTER_AREA)
  }


  cv.imshow('view', frame);
  cv.waitKey(1);
}
  setTimeout(updateDisplay, 1000/30)
};

updateDisplay();
