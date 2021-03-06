#!/usr/bin/env node

'use strict';

// Node modules
var fs = require('fs');
var RNCryptor = require('jscryptor');
var program = require('commander');
var fileExists = require('file-exists');
var path = require('path');
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
  console.error('\nMissing mandatory arguments.\n');
  program.help();
  process.exit(1);
}

if ( !fileExists(source) ) {
  console.log('\nCannot find the source file.\n');
  process.exit(1);
}

if ( !destination ) {
  destination = path.parse(source).dir + '/' + path.parse(source).name + '.enc';
}

var file = fs.readFileSync( source );
var enc = RNCryptor.Encrypt( file, program.password );

// write encrypted output to a file
fs.writeFileSync( destination, enc );