function isMonotonic(ar) {
  let res = true;
  for(let i = 0; i < ar.length - 1; i++) {
    res = res  && ar[i + 1] >= ar[i]  
  }
  if(!res) {
    res = true;
    for(let i = 0; i < ar.length - 1; i++) {
      res = res  && ar[i + 1] <= ar[i]  
    }
    return res;
  } else {
    return res;
  }
}
const ar = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001]

console.log(isMonotonic(ar))