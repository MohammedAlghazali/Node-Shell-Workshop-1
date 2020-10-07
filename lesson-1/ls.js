#!/usr/bin/env node

const { readdir } = require('fs');

const fileToRead = process.argv[2];
if (process.argv[3] === '-ex' && process.argv[4]) {
  console.log('hello from if');
  readdir(process.cwd() + '/' + fileToRead, (err, files) => {
    if (!err) {
      files.forEach((file) => {
        const fileType = file.split('.')[1];
        if (fileType === process.argv[4]) {
          process.stdout.write(file + ' ');
        }
      });
    }
  });
} else {
  readdir(process.cwd(), (err, files) => {
    if (!err) {
      files.forEach((file) => {
        process.stdout.write(file + '\n');
      });
    }
  });
}
