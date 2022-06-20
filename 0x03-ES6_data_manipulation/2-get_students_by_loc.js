export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }
  if (typeof city !== 'string') {
    return [];
  }
  return students.filter((student) => student.location === city);
}
