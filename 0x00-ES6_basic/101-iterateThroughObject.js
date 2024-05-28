export default function iterateThroughObject(reportWithIterator) {
  const map = [...reportWithIterator];
  return map.join(' | ');
}
