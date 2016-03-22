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

var file = fs.readFileSync( source );
var enc = RNCryptor.Encrypt( file, program.password );

// write encrypted output to a file
fs.writeFileSync( destination, enc );
// var fileName = files[i].name.replace( '.jpg', '' ).replace( '.jpeg', '' );