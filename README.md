# JSCryptor-cli

A cli (command line) version of [JSCryptor](https://github.com/chesstrian/JSCryptor) (a Javascript implementation of with Rob Napier's [RNCryptor](https://github.com/RNCryptor/RNCryptor)).

## Install

`npm install jscryptor -g`

## Usage

Run this tool from your shell following this pattern:

`jscryptor <command> [options] <source> [destination]`

### Commands available

| Command | description |
| --------|-------------|
| decrypt | decrypt a file |
| encrypt | encrypt a file |

### Options

| Command | description |
| --------|-------------|
| -h, --help | output usage information |
| -p, --password | password to be used during encryption (mandatory) |

### Arguments

You must give the file path of the source you want to de/encrypt.

Optionally, you can pass a destination path where the result will be written. If you don't, this tool will write a new file with the same name and location of the source file but with a different extension (.dec for decrypted data, .enc for encrypted).
