process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  const arg = process.stdin.read();

  if (arg) {
    process.stdout.write(`Your name is: ${arg}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
