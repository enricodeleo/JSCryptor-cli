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
  var b64 = new Buffer( fs.readFileSync(source).toString(), 'base64' );
  var dec = RNCryptor.Decrypt( b64, program.password );

  // Write encrypted file
  fs.writeFileSync( destination, dec );
})
.parse(process.argv);