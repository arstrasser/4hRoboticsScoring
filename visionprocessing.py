#!/usr/bin/python3

import cv2
from flask import Flask, send_from_directory, request

### Configuration ###
devicePort = 1
serverPort = 80


### Variables ###
camera = cv2.VideoCapture(devicePort)
redVideo = cv2.VideoCapture('./media/red.mp4')
blueVideo = cv2.VideoCapture('./media/blue.mp4')
tieVideo = cv2.VideoCapture('./media/tie.mp4')

displayMode = 0

scores = { "red": 0, "blue": 0 }

def numDigits(num):
    return len(str(num))

def updateFrame():
    if(displayMode == 0):
        frame = camera.read()
    elif(displayMode == 1):
        if(scores.red > scores.blue):
            frame = redVideo.read()
        elif(scores.red == scores.blue):
            frame = tieVideo.read()
        else:
            frame = blueVideo.read()
    elif(displayMode == 2):
        mat = cv2.imread("./media/score-bg2.png", cv2.IMREAD_UNCHANGED)
        cv2.putText(
            mat,
            str(scores.blue),
            (190-(45*numDigits(scores.red)), 410),
            cv2.FONT_HERSHEY_SIMPLEX,
            5,
            (255, 255, 255),
            15,
            cv2.LINE_4,
            False
        )

        cv2.putText(
            mat,
            str(scores.red),
            (760-(45*numDigits(scores.red)), 410),
            cv2.FONT_HERSHEY_SIMPLEX,
            5,
            (255, 255, 255),
            15,
            cv2.LINE_4,
            False
        )

        frame = mat
    
    if(not frame.empty()):
        if(displayMode == 1):
            frame = frame.resize(768, frame.cols//frame.rows*768, cv2.INTER_AREA)
        else:
            frame = frame.resize(frame.rows//frame.cols*1024, 1024, cv2.INTER_AREA)
        cv2.imshow('view', frame)
    
    cv2.waitKey(100)

if __name__ == '__main__':
    while(True):
        updateFrame()

    