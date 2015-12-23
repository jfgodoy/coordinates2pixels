var atan = Math.atan,
    cos = Math.cos,
    exp = Math.exp,
    log = Math.log,
    pow = Math.pow,
    tan = Math.tan,
    PI = Math.PI;

function lng2pixel(lon, zoom) {
  var pixels = 256 * pow(2, zoom);
  return pixels * (lon + 180) / 360 ;
}

function lat2pixel(lat, zoom)  {
  var pixels = 256 * pow(2, zoom);
  return pixels * (1 - log(tan(lat * PI / 180) + 1 / cos(lat * PI / 180)) / PI) / 2;
}

function pixel2lng(x, zoom) {
  var pixels = 256 * pow(2, zoom);
  return x / pixels * 360 - 180;
}

function pixel2lat(y, zoom) {
  var pixels = 256 * pow(2, zoom),
      n = PI - 2 * PI * y / pixels;
  return 180 / PI * atan(0.5 * (exp(n) - exp(-n)));
}

module.exports = {
  lng2pixel: lng2pixel,
  lat2pixel: lat2pixel,
  pixel2lng: pixel2lng,
  pixel2lat: pixel2lat
};
