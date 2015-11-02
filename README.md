# raspi-light-react-meteor
Interactive web-controlled light with Raspberry Pi, Meteor and React.js

Built with Raspberry pi, Meteor and React.js, of course, with NeoPixel LED strip. This project requires understanding of belisted components. Not recommended for beginners.

# How to install

### Setup Rapsberry pi

http://meteor-universal.tumblr.com/post/132266856859/1st-time-installation-meteor-12x-universal-raspbian

- [Download raspbian-jessie](https://www.raspberrypi.org/downloads/raspbian/)

### Install Meteor on Raspberry Pi

It seems like node 0.10.38 version is not working for meteor 1.2. Before run ```$ meteor --version``` don't forget to install v0.10.40 of node.js.

- [Download 0.10.40 and follow instruction](http://conoroneill.net/node-v01040-and-v0127-for-arm-v7-raspberry-pi-2-banana-pi-odroid-c1-available/)


# Wiring and Hardware Instruction

There is [a guide over at adafruit.com](https://learn.adafruit.com/neopixels-on-raspberry-pi) on how to get the hardware up and running. Follow these instructions.

Check out more about this project [here](https://github.com/raspberry-node/node-rpi-ws281x-native)

# BOM
- Raspberry Pi
- NeoPixel LED Strip
- Shaded Spherical Glass
- Styrofoam Sphere
- Extruded PVC Foam Sheet (포맥스)
- Emtpy Toilet Paper Roll (휴지심)

# Known Issues

###### 1. Meteor is not running due to mongodb startup error
```
$ export LC_ALL=C
```
