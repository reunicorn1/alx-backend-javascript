const fs = require('fs');
const path = require('path');

const readDatabase = async (file) => new Promise((resolve, reject) => {
  fs.readFile(path.join(__dirname, file), 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const std = data.trim().split('\n');
    std.shift(); // remove the first element which is the title

    const fields = [];
    // firstname, lastname, age, field
    for (const value of std) {
      const student = value.split(',');
      fields.push(student[0]);
    }
    resolve(fields);
  });
});
