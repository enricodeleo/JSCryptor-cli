#!/usr/bin/env node

'use strict';

// Node modules
var program = require('commander');

program
.version('1.0.0')
.arguments('<source> <destination>')
.option('-p, --password <password>', 'The encrypting password')
.action(function(source, destination) {
  // Save encrypted image to a file
  var b64 = new Buffer(fs.readFileSync(source).toString(), 'base64');
  var dec = RNCryptor.Decrypt(b64, program.password);

  fs.writeFileSync(destination, dec);
})
.parse(process.argv);

// program
// .version('1.0.0')
// .command('encrypt <source> <destination>', 'install one or more packages')
// .command('decrypt <source> <destination>', 'search with optional query', {isDefault: true})
// .parse(process.argv);