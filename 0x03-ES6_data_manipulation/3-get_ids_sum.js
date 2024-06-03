export default function getStudentIdsSum(array) {
  if (Array.isArray(array)) {
    return array.reduce((sum, item) => item.id + sum, 0);
  }
  return 0;
}
