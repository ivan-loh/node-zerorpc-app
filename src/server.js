'use strict';

const program = require('commander');
const zerorpc = require('zerorpc');

program
  .version('0.0.1')
  .option('-p, --port [value]', 'Specific listening port we\'re using')
  .parse(process.argv);


var context = {
  hello: function (string, done) {
    return done(null, 'hello ' + (string || ''));
  }
};


var server = new zerorpc.Server(context);
    server.bind('tcp://0.0.0.0:' + program.port);
    server.on('error', function (err) {
      console.error('RPC Server Error: ', err);
    });