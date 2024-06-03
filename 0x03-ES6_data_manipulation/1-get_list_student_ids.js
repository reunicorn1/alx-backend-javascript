export default function getListStudentIds(array) {
  let list = [];
  if (Array.isArray(array)) {
    list = array.map((item) => item.id);
  }
  return list;
}
