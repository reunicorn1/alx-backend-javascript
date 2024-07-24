const http = require('http');

const PORT = 1245;

// overriding the normal behavior or console.log
const originalLog = console.log;
let students = [];
console.log = (input) => {
  students.push(`${input}`);
};

// calling the function
const countStudents = require('./3-read_file_async');

let app;
countStudents('database.csv')
  .then(() => {
    // Restoring normal behavior of console.log
    students = students.join('\n');
    console.log = originalLog;
  })
  .then(() => {
    // Setting the server
    app = http.createServer((req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/plain' });

      switch (req.url) {
        case '/':
          res.end('Hello Holberton School!');
          break;
        case '/students':
          res.end(`This is the list of our students\n${students}`);
          break;
        default:
          res.end('');
      }
    });

    app.listen(PORT);
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = app;
