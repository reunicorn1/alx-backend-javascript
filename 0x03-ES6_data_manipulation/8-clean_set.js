export default function cleanSet(set, startString) {
  if (set instanceof Set && typeof startString === 'string') {
    const concat = [];
    if (startString) {
      set.forEach((item) => {
        if (item.startsWith(startString)) {
          concat.push(item.slice(startString.length));
        }
      });
    }
    return concat.join('-');
  }
  return undefined;
}
