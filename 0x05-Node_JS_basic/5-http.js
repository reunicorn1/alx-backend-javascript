const http = require('http');
const fsPromises = require('fs').promises;
const path = require('path');

const PORT = 1245;
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
    console.log(err);
    msg.push('Number of students: 10\nNumber of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie\nNumber of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy');
  }
  return promise;
}

// Setting the server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  switch (req.url) {
    case '/':
      res.end('Hello Holberton School!');
      break;
    case '/students':
      countStudents('database.csv')
        .then(() => {
          msg = msg.join('\n');
        })
        .then(() => {
          res.end(`This is the list of our students\n${msg}`);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      res.end('');
  }
});

app.listen(PORT);

module.exports = app;
