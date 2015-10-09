# raspi-light-react-meteor
Interactive web-controlled light with Raspberry Pi, Meteor and React.js

Built with Raspberry pi, Meteor and React.js, of course, with NeoPixel LED strip. This project requires understanding of belisted components. Not recommended for beginners.

# How to install

### Setup Rapsberry pi

http://meteor-universal.tumblr.com/post/118809833179/1st-time-installation-meteor-universal-raspbian-wheezy

- [Download raspbian-jessie](https://www.raspberrypi.org/downloads/raspbian/)

### Install Meteor on Raspberry Pi

It seems like node 0.10.38 version is not working for meteor 1.2. Before run ```$ meteor --version``` don't forget to install v0.10.40 of node.js.

- [Download 0.10.40 and follow instruction](http://conoroneill.net/node-v01040-and-v0127-for-arm-v7-raspberry-pi-2-banana-pi-odroid-c1-available/)


# Wiring and Hardware Instruction

There is [a guide over at adafruit.com](https://learn.adafruit.com/neopixels-on-raspberry-pi) on how to get the hardware up and running. Follow these instructions.

Check out more about this project [here](https://github.com/raspberry-node/node-rpi-ws281x-native)

# Known Issues

If meteor is not running due to mongodb startup error
```
$ exports LC_ALL=C
```
