let arr = [1, 2, 3, 4, 5, 2, 3];
let n = arr.length;
let sum = "";
let begetduplicate = (arr, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        sum += arr[i];
        sum += " ";
      }
    }
  }
  return sum;
};
console.log(begetduplicate(arr, n));
