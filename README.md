# 4-H Robotics Scoring System

Developed by Alex Strasser 2019

### Overview

This scoring system was developed to help run 4-H robotics challenges at the Somerset County 4-H fair each year. It allows for live webcam/score display on a projector and referee scoring on mobile phones.

This system consists of 3 components:
- A mobile application (website)
- A webcam display on the server (opencv)
- A webserver (to tie everything together)

The webserver was coded using [Express](https://expressjs.com/) to run on a Node.js webserver. It uses the [opencv4nodejs](https://github.com/justadudewhohacks/opencv4nodejs) to display current webcam views in a window on the server. The server also hosts a compiled angular app that can be accessed by phones on the same network as the server.

The webserver and webcam code is stored in server.js

The mobile web app code is stored in /scoring-interface2019 in an [Angular](https://angular.io/) project. Every time this code is updated, run `ng build` and reload the server to update everything.

### Setup

First, clone/download this repository.

One of the significant dependencies of the webserver is [`opencv4nodejs`](https://github.com/justadudewhohacks/opencv4nodejs). This library allows us to display the webcam stream in a local window and additionally do image processing to display the scores at the end of each round.

This library has a dependency that must be installed globally **if you are on Windows**. If you are not on Windows, you do not need to install any additional packages.

Windows: `npm i -g windows-build-tools`

Personally, I have had lots of trouble getting it installed, but that is the hardest part. If you need additional help, see [here](https://github.com/felixrieseberg/windows-build-tools#readme)

Now, you should be set to install everything else.
- `npm i` - Install necessary components for the server. (This will take a long time and processing power: ~20 minutes)
- `cd scoring-interface2019` - Go into the Angular project directory.
- `npm i` - Install dependencies for the Angular project.
- `ng build --prod` - Compiles the Angular code into a static app. This command should create a directory called scoring-build in the root directory of the repository.
- `cd ..` - Go back into the root project directory.

### Configuration

To select a different camera device, open `server.js` and change the `const devicePort` to have a different value.

If the device port is invalid, the server won't start.

To select a different webserver port, open `server.js` and change the `const serverPort` to have a different value.

### Running the Server

To start the server: `node server.js`

This should open a window for the webcam stream as well as a port for the webserver. You should be able to connect on the port logged into the server console from either a computer or phone **ON THE SAME NETWORK**. Just open chrome/safari on the phone and navigate to http://IP_ADDRESS:PORT

This means your server computer must be on the same wifi network as the referee phones, or you will have to set up port forwarding.
