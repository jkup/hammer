var assert  = require('assert');
var path    = require('path');
var request = require('supertest');

var app = require("../app/server").getApp;

describe('GET /', function() {
  it('responds with html', function(done){
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200, done);
  });
});
