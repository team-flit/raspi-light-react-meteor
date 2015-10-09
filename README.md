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

1. If meteor is not running due to mongodb startup error
```
$ exports LC_ALL=C
```

1. If failed to install dependency kiit

```
It's the first time you've run Meteor from a git checkout.
I will download a kit containing all of Meteor's dependencies.

You are trying to run Meteor on yet not official supported platform: Linux_armv6l
There is currently no pre-built dev_bundle available for your system.
Check https://github.com/4commerce-technologies-AG/meteor to get
the information how you may generate your own dev_bundle using
scripts/generate-dev-bundle.sh

Unable to download: https://dl.bintray.com/4commerce-technologies-ag/meteor-universal/arm_dev_bundles/dev_bundle_Linux_armv6l_0.5.14.tar.gz
Pre-built tarball is not available!

Failed to install dependency kit.
```

If you see this error, generate dev bundle manually.

```
scripts/generate-dev-bundle.sh
```
