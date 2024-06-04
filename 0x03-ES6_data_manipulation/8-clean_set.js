export default function cleanSet(set, startString) {
  if (set instanceof Set && Array.from(set).every((item) => typeof item === 'string') && typeof startString === 'string' && startString) {
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
