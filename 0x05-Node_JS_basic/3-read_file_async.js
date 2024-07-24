const fsPromises = require('fs').promises;
const path = require('path');

async function countStudents(file) {
  const promise = fsPromises.readFile(path.join(__dirname, file), 'utf8');
  try {
    const contents = await promise;
    const std = contents.trim().split('\n');
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
  } catch (err) {
    throw Error('Cannot load the database');
  }
  return promise;
}

module.exports = countStudents;
