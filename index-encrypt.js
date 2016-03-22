#!/usr/bin/env node

'use strict';

// Node modules
var fs = require('fs');
var RNCryptor = require('jscryptor');
var program = require('commander');
var randomString = require('random-string');

// parsing the command
program
.arguments('<source> <destination>')
.option('-p, --password [password]', 'password to be used during encryption (mandatory)')
.parse(process.argv);

if ( !program.args.length || !program.password ) {
  console.error('\nMissing mandatory arguments.');
  program.help();
  process.exit(1);
}

program.action(function( source, destination ) {
  var file = fs.readFileSync( source );
  var enc = RNCryptor.Encrypt( file, program.password );

  // write encrypted output to a file
  fs.writeFileSync( destination, enc );
  // var fileName = files[i].name.replace( '.jpg', '' ).replace( '.jpeg', '' );
})
.parse(process.argv);