const { readFile } = require('fs');

const fileToRead = process.argv[2];

readFile(fileToRead, (err, data) => {
  if (err) {
    process.stdout.write('file does not exist');
  }
  process.stdout.write(data);
});
