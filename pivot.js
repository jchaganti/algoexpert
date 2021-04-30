
const findPivot = (input) => {
  const len = input.length;
  if(len < 2) {
    return -1;
  }
  const ltr = [], rtl = [];
  // Build cumulative values for the input array, both ltr (left-to-right) and rtl (right-to-left)
  // The idea is to check which index has the same cumulative value in ltr and rtl arrays
  for(let i = 0; i < len; i++) {
    if(i === 0) {
      ltr[0] = input[0];
      rtl[0] = input[len - 1];
    } else {
      ltr[i] = ltr[i - 1] + input[i];
      rtl[i] = rtl[i - 1] + input[len - i - 1];
    }
  }
  // Ignore last 2 values of ltr and rtl arrays, since 
  // last value is the cumulative value for the index beyond input array length and
  // last-but-one value is for the first and last values of the input array for which 
  // left and right side elements do not exist respectively
  const bound = len - 2 ;
  for(let i = 0; i < bound; i++) {
    if(ltr[i] === rtl[bound - i - 1]) {
      return i + 1;
    }
  } 
  return -1;
}


let pivot = findPivot([6,4,5,1,0]);
console.assert(pivot === 1);

pivot = findPivot([-4,5,5,1,0,-10]);
console.assert(pivot === 1);

pivot = findPivot([1,4,6,3,2]);
console.assert(pivot === 2);

pivot = findPivot([-111,100,13,100,2]);
console.assert(pivot === 3);

pivot = findPivot([-111,100]);
console.assert(pivot === -1);

pivot = findPivot([-1,1,-1]);
console.assert(pivot === 1);

pivot = findPivot([]);
console.assert(pivot === -1);