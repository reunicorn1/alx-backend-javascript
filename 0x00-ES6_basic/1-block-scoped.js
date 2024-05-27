export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task2 = true;
    const task = false;
    return [task, task2]
  }

  return [task, task2];
}