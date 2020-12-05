let arr = [1, 2, 4, 5, 2, 5];
let n = arr.length,sum = "",i,j;
let begetduplicate = (arr, n) => {
  for (i = 0; i < n; i++) {
    for (j = i + 1; j < n; j++) {
      if (arr[i] === arr[j]) {
        sum += arr[i];
        sum += " ";
      }
    }
  }
  return sum;
};
console.log(begetduplicate(arr, n));

