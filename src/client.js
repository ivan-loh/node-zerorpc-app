'use strict';

const program = require('commander');
const zerorpc = require('zerorpc');

program
  .version('0.0.1')
  .option('-p, --port [value]', 'Specific port we\'re connecting to')
  .parse(process.argv);

const client = new zerorpc.Client();
      client.connect('tcp://0.0.0.0:' + program.port);
      client.on('error', function (err) {
        console.error('RPC Server Error: ', err);
      });

client.invoke('hello', ' mr. robot', function(err, res, more) {

  if(err) {
    console.error(err);
  } else {
    console.log(res);
  }

  if (!more) { console.log('Done.'); }

});