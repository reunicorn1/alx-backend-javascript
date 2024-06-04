export default function hasValuesFromArray(set, array) {
  if (set instanceof Set && Array.isArray(array)) {
    return array.every((item) => [...set].includes(item));
  }
  return undefined;
}
