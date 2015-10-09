var ws281x = Meteor.npmRequire('rpi-ws281x-native');
var NUM_LEDS = 16;
var neoPixel = null;

class Light {
  constructor (options) {
    this.numberOfLeds = options.numberOfLeds;
    this.pixelData = new Uint32Array(this.numberOfLeds);
    this.lightInterval = null;
    this.color = { red: 0, green: 0, blue: 0 }
  }

  setColor (color) {
    var options = _.extend([0,0,0], [ color.red, color.green, color.blue ]);
    this.color = _.clone(color, true);

    for ( var i = 0; i < this.numberOfLeds; i++) {
      this.pixelData[i] = NeoPixelUtil.rgb2Int(options[0], options[1], options[2]);
    }
  }

  light (color) {
    ws281x.render(this.pixelData);
  }

  breath (color) {
    var pixelData = this.pixelData;
    var color = this.color;

    var offset = 100;
    var isAdding = true;

    this.lightInterval = setInterval(function () {
      if ( isAdding ) {
        offset += 1;
      } else {
        offset -= 1;
      }

      if (offset <= 100) {
        offset = 100;
        isAdding = true;
      } else if (offset > 255) {
        offset = 255;
        isAdding = false;
      }

      for (var i = 0; i < NUM_LEDS; i++) {
        var colorData = NeoPixelUtil.getOffsetColor(color, offset);
        pixelData[i] = NeoPixelUtil.rgb2Int(colorData[0], colorData[1], colorData[2]);
      }
      ws281x.render(pixelData);
    }, 1000 / 50);
  }

  rainbow () {
    var offset = 0;
    var pixelData = this.pixelData;

    this.lightInterval = setInterval(function () {
      for (var i = 0; i < NUM_LEDS; i++) {
        pixelData[i] = NeoPixelUtil.colorwheel((offset + i) % 256);
      }

      offset = (offset + 1) % 256;
      ws281x.render(pixelData);
    }, 1000 / 30);
  }

  turnoff() {
    this.setColor(0,0,0);
    ws281x.render(this.pixelData);
    if ( this.lightInterval ) {
      clearInterval(this.lightInterval);
    }
  }
}

NeoPixelUtil = {
  getOffsetColor(color, offset) {
    var red = (color.red-offset > 0) ? parseInt(color.red-offset) : 0;
    var green = (color.green-offset > 0) ? parseInt(color.green-offset) : 0;
    var blue = (color.blue-offset > 0) ? parseInt(color.blue-offset) : 0;
    return [ red, green, blue ];
  },

  colorwheel(pos) {
    pos = 255 - pos;
    if (pos < 85) { return this.rgb2Int(255 - pos * 3, 0, pos * 3); }
    else if (pos < 170) { pos -= 85; return this.rgb2Int(0, pos * 3, 255 - pos * 3); }
    else { pos -= 170; return this.rgb2Int(pos * 3, 255 - pos * 3, 0); }
  },

  rgb2Int(r, g, b,) {
    return ((r & 0xff) << 16) + ((g & 0xff) << 8) + (b & 0xff);
  }
}

Meteor.startup(function () {
  try {
    ws281x.init(NUM_LEDS);
    neoPixel = new Light({
      numberOfLeds: NUM_LEDS
    });
    console.log("Initialization completed.");
  }
  catch (err) {
    console.log('This app only works in raspberry pi 1 b and b+. Check your deivce.');
    console.log('If you have other problem see the error below');
    console.log('Error:', err);
  }
});

Meteor.methods({
  light (options) {
    neoPixel.turnoff();
    neoPixel.setColor(options.color)
    switch (options.mode) {
      case 'on':
        console.log('Light On');
        neoPixel.light();
        break;
      case 'off':
        console.log('Light Off');
        break;
      case 'rainbow':
        console.log('Rainbow');
        neoPixel.rainbow();
        break;
      case 'breath':
        console.log('Breath');
        neoPixel.breath();
        break;
      default:
        console.log('MATCH_NOT_FOUND');
        break;
    }
  }
});
