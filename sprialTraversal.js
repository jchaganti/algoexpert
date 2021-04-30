function spiralTraverse(ar) {
  const visited = ar.map(row => row.map(e => false));
  const res = [];
  const rows = ar.length, cols = ar[0].length;
  let i = 0, j = 0;
  const moveRight = (i, j) => {
    while(j < cols && visited[i] && !visited[i][j] ) {
      res.push(ar[i][j]);
      visited[i][j] = true;
      j++;
    }
    return j - 1;
  }
  const moveDown = (i, j) => {
    while(i < rows && visited[i] && !visited[i][j] ) {
      res.push(ar[i][j]);
      visited[i][j] = true;
      i++;
    }
    return i - 1;
  }

  const moveLeft = (i, j) => {
    while(j >= 0 && visited[i] && !visited[i][j] ) {
      res.push(ar[i][j]);
      visited[i][j] = true;
      j--;
    }
    return j + 1;
  }
  const moveUp = (i, j) => {
    while(i >= 0 && visited[i] && !visited[i][j] ) {
      res.push(ar[i][j]);
      visited[i][j] = true;
      i--;
    }
    return i + 1;
  }
  
  while(i < cols && i >=0 && j < rows && j >=0 && visited[i] &&  !visited[i][j]) {
    j =  moveRight(i, j);
    i++;
    i =  moveDown(i, j);
    j--;
    j =  moveLeft(i, j);
    i--;
    i =  moveUp(i, j);
    j++;
  }
  return res;
}


// Do 
const ar = [
  [1, 2, 3],
  [12, 13, 4],
  [11, 14, 5],
  [10, 15, 6],
  [9, 8, 7]
]

console.log(spiralTraverse(ar))