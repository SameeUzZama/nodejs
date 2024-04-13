let app = require("./app");

for (i = 0; i < app.y; i++) {
  //   console.log(i);
}
// console.log(app.z());

const arr = [2, 4, 5, 6, 7, 8, 9, 41, 3, 3, 3, 3, 46];
const res = arr.filter((e) => {
  return e === 3;
}).length;
console.log(res);
