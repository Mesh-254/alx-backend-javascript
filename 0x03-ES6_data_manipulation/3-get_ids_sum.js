export default function getIdsSum(student) {
  // sum of ids of students using reduce
  return student.reduce((acc, curr) => acc + curr.id, 0);
}
