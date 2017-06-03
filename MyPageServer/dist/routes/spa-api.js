'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var spaApi = (0, _express.Router)();

/* GET home page. */
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
/**
 * Created by flyin on 2017/6/3.
 */
spaApi.get('/', function (req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

exports.default = spaApi;
//# sourceMappingURL=spa-api.js.map