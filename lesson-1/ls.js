const { readdir } = require('fs');

const currentPath = process.cwd();
readdir(currentPath, (err, files) => {
  if (!err) {
    files.forEach((file) => {
      process.stdout.write(file + ' ');
    });
  }
});
