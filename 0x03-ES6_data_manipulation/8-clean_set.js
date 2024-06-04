export default function cleanSet(set, startString) {
  if (set && set instanceof Set && startString && typeof startString === 'string') {
    const concat = [];
    set.forEach((item) => {
      if (typeof item === 'string' && item.startsWith(startString)) {
        concat.push(item.slice(startString.length));
      }
    });
    return concat.join('-');
  }
  return '';
}
