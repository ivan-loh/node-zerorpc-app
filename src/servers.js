'use strict';

const fork = require('child_process').fork;

[50001, 50002, 50003]
  .forEach(function (port) {
    fork('./src/server.js', ['-p', port]);
  });