#!/usr/bin/env node

const { readFile } = require('fs');
const pattern = process.argv[2];
const fileToRead = process.argv[3];

readFile(process.cwd() + '/' + fileToRead, function (err, data) {
  if (err) {
    process.stdout.write('file does not exist');
  } else {
    var arrayOfLines = data.toString().split('\n');

    arrayOfLines.forEach(function (line) {
      if (line.includes(pattern)) process.stdout.write(line + '\n');
    });
  }
});
