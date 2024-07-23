const fs = require('fs');
const path = require('path');

const countStudents = (file) => {
  if (!fs.existsSync(path.join(__dirname, file))) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(file, 'utf8');
  const std = data.trim().split('\n');
  std.shift(); // remove the first element which is the title

  console.log(`Number of students: ${std.length}`);

  const fields = {};
  // firstname,lastname,age,field
  for (const value of std) {
    const student = value.split(',');
    if (!Object.keys(fields).includes(student[3])) {
      fields[student[3]] = [student[0]];
    } else {
      fields[student[3]].push(student[0]);
    }
  }

  for (const key of Object.keys(fields)) {
    const students = fields[key];
    const string = students.join(', ');
    console.log(`Number of students in ${key}: ${students.length}. List: ${string}`);
  }
};

module.exports = countStudents;
