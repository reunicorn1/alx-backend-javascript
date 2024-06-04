export default function cleanSet(set, startString) {
  if (set instanceof Set && typeof startString === 'string' && startString) {
    const concat = [];
    set.forEach((item) => {
      if (item.startsWith(startString)) {
        concat.push(item.slice(startString.length));
      }
    });
    return concat.join('-');
  }
  return '';
}
