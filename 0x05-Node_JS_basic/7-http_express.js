const express = require('express');
const fsPromises = require('fs').promises;
const path = require('path');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const PORT = 1245;

const app = express();

let msg = [];

// counStudents function
async function countStudents(file) {
  const promise = fsPromises.readFile(path.join(__dirname, file), 'utf8');
  try {
    const contents = await promise;
    const std = contents.trim().split('\n');
    std.shift(); // remove the first element which is the title

    msg.push(`Number of students: ${std.length}`);

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
      msg.push(`Number of students in ${key}: ${students.length}. List: ${string}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
  return promise;
}

// Setting the server
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DB_FILE)
    .then(() => {
      msg = msg.join('\n');
      res.send(`This is the list of our students\n${msg}`);
    })
    .catch((err) => {
      msg.push(err instanceof Error ? err.message : err.toString());
      msg = msg.join('\n');
      res.end(`This is the list of our students\n${msg}`);
    });
});

app.listen(PORT);

module.exports = app;
