const { readdir } = require('fs');

const currentPath = process.cwd();

if (process.argv[2] === '-ex' && process.argv[3]) {
  readdir(currentPath, (err, files) => {
    if (!err) {
      files.forEach((file) => {
        const fileType = file.split('.')[1];
        if (fileType === process.argv[3]) {
          process.stdout.write(file + ' ');
        }
      });
    }
  });
} else {
  readdir(currentPath, (err, files) => {
    if (!err) {
      files.forEach((file) => {
        process.stdout.write(file + ' ');
      });
    }
  });
}
