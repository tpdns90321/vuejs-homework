let studentCount = 31;
let pageSize = 5;

let pageNum = Math.floor(studentCount / pageSize) + (studentCount % pageSize !== 0 ? 1 : 0);
console.log(pageNum);
