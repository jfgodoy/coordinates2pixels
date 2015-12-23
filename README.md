# Coordinates2pixels
Coordinates2pixels is a utility module which helps to convert from geographic coordinates (EPSG:4326) to pixel coordinates and the other way round.

# Installation

```
npm install --save coordinates2pixels
```

# API

function | description
---|---
lng2pixel(lng, zoom) | converts longitude to pixels coordinates (return a float).
lat2pixel(lat, zoom) | converts latitude to pixels coordinates (return a float).
pixel2lng(x, zoom) | converts x to geographic coordinates.
pixel2lat(y, zoom) | converts y to geographic coordinates.

# Usage
see `example/square.js`

```
var coords = require('coordinates2pixels');

// create a square around the coordinates
function square(lng, lat, zoom, size) {
  var px = coords.lng2pixel(lng, zoom),
      py = coords.lat2pixel(lat, zoom);

  var box = [
    coords.pixel2lat(py + size/2, zoom),
    coords.pixel2lng(px - size/2, zoom),
    coords.pixel2lat(py - size/2, zoom),
    coords.pixel2lng(px + size/2, zoom)
  ]

  return box;
}


// create a square of 100x100 pixels around coordinates (-70,-33)
var bbox = square(-70, -33, 18, 100);
// [ -33.00022494868904, -70.00026822090148, -32.99977505073747, -69.9997317790985 ]
```


# License

License: http://jfgodoy.mit-license.org