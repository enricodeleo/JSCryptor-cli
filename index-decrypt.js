#!/usr/bin/env node

'use strict';

// Node modules
var fs = require('fs');
var RNCryptor = require('jscryptor');
var program = require('commander');
var randomString = require('random-string');
var source, destination;

// parsing the command
program
.arguments('<source> [destination]')
.option('-p, --password [password]', 'password to be used during encryption (mandatory)')
.action(function( src, dest ) {
  source = src;
  destination = dest;
})
.parse(process.argv);

if ( !program.args.length || !program.password || !source ) {
  console.error('\nMissing mandatory arguments.');
  program.help();
  process.exit(1);
}

if ( !destination ) {
  console.log('destination is not set');
  process.exit(1);
}
var b64 = new Buffer( fs.readFileSync(source).toString(), 'base64' );
var dec = RNCryptor.Decrypt( b64, program.password );

// Write encrypted file
fs.writeFileSync( destination, dec );
