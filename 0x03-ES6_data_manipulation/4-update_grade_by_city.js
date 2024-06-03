export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter((item) => item.location === city);
  if (!city || !Array.isArray(newGrades) || !Array.isArray(students)) {
    return [];
  }
  return filteredStudents.map((item) => {
    const newItem = { ...item };
    const studentGrade = newGrades.filter((grade) => grade.studentId === item.id);
    newItem.grade = studentGrade.length ? studentGrade[0].grade : 'N/A';
    return newItem;
  });
}
