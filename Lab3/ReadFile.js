
const fs = require('fs');
const fileName = process.argv[2];

if (!fileName) {
  console.error('Please provide a file name.');
  process.exit(1);
}

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(`Error reading file: ${err.message}`);
    process.exit(1);
  }

  console.log(data);
});
