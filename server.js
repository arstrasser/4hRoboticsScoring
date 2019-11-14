const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cv = require('opencv4nodejs');
const path = require('path');

// CONFIGURATION:
const devicePort = 1;
const serverPort = 80;

//Variables
const camera = new cv.VideoCapture(devicePort);
const redVideo = new cv.VideoCapture('./media/red.mp4');
const blueVideo = new cv.VideoCapture('./media/blue.mp4');
const tieVideo = new cv.VideoCapture('./media/tie.mp4');

let displayMode = 0;

let app = express();
//Logs all requests for easy debugging
app.use(logger('dev'));

//Score storage
let scores = {'red':0, 'blue':0};

//Host the angular project index on the server
app.use("/score/", express.static(path.join(__dirname, 'scoring-build')))

//Host the angular project files on the server
app.get('/score/*', (req, res) => {
  res.sendFile(path.join(__dirname, "scoring-build", "index.html"));
})

//Gets the current scores
app.get('/currentScores', (req, res) => {
  res.status(200).json(scores);
})

//Request to update the score
//Example: /updateScores?color=red&score=30
app.get('/updateScores', (req, res) => {
  let newScore = parseInt(req.query.score);
  let team = req.query.color;
  if (!scores.hasOwnProperty(team)){
    res.status(400).send("That color doesn't exist!");
  }
  scores[team] = newScore;
  res.status(200).json({"status":"Success"});
})

//Request to display the scores on the screen
app.get('/publish', (req, res) => {
  //Just updates the display mode for the later opencv code
  displayMode = 1;
  res.status(200).json({"status":"Success"});
})

//Start the server
app.listen(serverPort, () => {
  console.log("Webserver listening on port "+serverPort+"...")
})

let numDigits = (number) => {
  return (""+number).length
}

let frame;
//Repeating function to update the display
let updateDisplay = () => {
  //Wait time between frames for opencv
  let wait = 10;

  //Display the webcam feed
  if(displayMode == 0){
    frame = camera.read();
  }

  //Display the video for score reveal
  if(displayMode == 1){
    //Decrease wait time between frames
    wait = 5;
    if(scores.red > scores.blue){
      frame = redVideo.read();
    }else if (scores.blue > scores.red){
      frame = blueVideo.read();
    }else { //Tie Game
      frame = tieVideo.read();
    }
    //If video finished
    if(frame.empty){
      //Reset the videos to starting points
      redVideo.reset();
      blueVideo.reset();
      tieVideo.reset();
      //Display scores
      displayMode = 2;
      setTimeout(() => {
        //After 7 seconds, change to display feed again and reset scores
        displayMode = 0;
        scores.blue = 0;
        scores.red = 0;
      }, 7000);
    }
  }

  if (displayMode == 2) {
    //Display scores and overlay score text
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
  //If we have something to display
  if(!frame.empty){
    //Resizing to fit the projector aspect ratio and resolution
    if(displayMode == 1){
      //Resize based on height (video feed is too wide)
      frame = frame.resize(768, Math.floor(frame.cols/frame.rows*768), cv.INTER_AREA)
    }else {
      //Resize based on width (camera and image are too tall)
      frame = frame.resize(Math.floor(frame.rows/frame.cols*1024), 1024, cv.INTER_AREA)
    }

    //Display the image in the window
    cv.imshow('view', frame);
    cv.waitKey(1);
  }
  //Update feed at 30 FPS so we have time to process web requests
  setTimeout(updateDisplay, 1000/30)
};

updateDisplay();
