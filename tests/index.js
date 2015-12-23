var should = require('should');
var coords = require('../index.js');
var DELTA = 0.000001;

describe('#lng2pixel', function() {
  it('converts longitud of east', function() {
    coords.lng2pixel(-180, 0).should.be.approximately(0, DELTA);
  });

  it('converts longitud of center', function() {
    coords.lng2pixel(0, 0).should.be.approximately(128, DELTA);
  });

  it('converts longitud of west', function() {
    coords.lng2pixel(180, 0).should.be.approximately(256, DELTA);
  });
});

describe('#lat2pixel', function() {
  it('converts latitud of north', function() {
    coords.lat2pixel(85.0511287798, 0).should.be.approximately(0, DELTA);
  });

  it('converts latitud of center', function() {
    coords.lat2pixel(0, 0).should.be.approximately(128, DELTA);
  });
    
  it('converts latitud of south', function() {
    coords.lat2pixel(-85.0511287798, 0).should.be.approximately(256, DELTA);
  });
});


describe('#pixel2lng', function() {
  it('converts coordinate x left', function() {
    coords.pixel2lng(0, 0).should.be.approximately(-180, DELTA);
  });

  it('converts coordinate x center', function() {
    coords.pixel2lng(128, 0).should.be.approximately(0, DELTA);
  });

  it('converts coordinate x right', function() {
    coords.pixel2lng(256, 0).should.be.approximately(180, DELTA);
  });
});

describe('#pixel2lat', function() {
  it('converts coordinate y top', function() {
    coords.pixel2lat(0, 0).should.be.approximately(85.0511287798, DELTA);
  });

  it('converts coordinate y center', function() {
    coords.pixel2lat(128, 0).should.be.approximately(0, DELTA);
  });

  it('converts coordinate y bottom', function() {
    coords.pixel2lat(256, 0).should.be.approximately(-85.0511287798, DELTA);
  });

});

  