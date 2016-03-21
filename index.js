#!/usr/bin/env node

var program = require('commander');

program
.arguments('<file>')
.option('-p, --password <password>', 'The encrypting password')
.action(function(file) {
  var _password = program.password;
  var _file = file;
  console.log('pass: %s file: %s', _password, _file);
})
.parse(process.argv);