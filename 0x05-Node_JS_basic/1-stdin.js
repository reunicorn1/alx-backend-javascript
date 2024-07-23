process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  if (data) {
    console.log('Your name is:', `${data.toString().trim()}`);
  }
});

process.stdin.on('end', function() {
  process.stdout.write('This important software is now closing\n');
});
