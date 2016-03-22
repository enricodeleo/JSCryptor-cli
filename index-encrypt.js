#!/usr/bin/env node

'use strict';

// Node modules
var fs = require('fs');
var RNCryptor = require('jscryptor');
var program = require('commander');
var randomString = require('random-string');

// parsing the command
program
.option('-p, --password', 'password to be used during encryption')
.parse(process.argv);

if (!program.args.length) {
  console.error('\nsome argument is missing.');
  program.outputHelp();
  process.exit(1);
}

console.log();
if (program.force) console.log('  force: install');
pkgs.forEach(function(pkg){
  console.log('  install : %s', pkg);
});
console.log();