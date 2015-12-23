var coords = require('../index.js');

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

console.log('create a square of 100x100 pixels around coordinates (-70,-33) at zoom 18:');
var bbox = square(-70, -33, 18, 100);
console.log(bbox);
// [ -33.00022494868904, -70.00026822090148, -32.99977505073747, -69.9997317790985 ]