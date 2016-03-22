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