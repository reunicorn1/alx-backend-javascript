export default function getStudentsByLocation(array, city) {
  let list = [];
  if (Array.isArray(array)) {
    list = array.filter((item) => item.location === city);
  }
  return list;
}
