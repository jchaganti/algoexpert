function moveElementToEnd(ar, toMove) {
    for (let i = 0, j = ar.length - 1; i < j;) {
        while (ar[i] !== toMove && i < j) {
          i++;
        }
        while (ar[j] === toMove && i < j) {
          j--;
        }
        if (i < j) {
            ar[i] = ar[j];
            ar[j] = toMove;
        }
    }
    return ar;
}

const ar = [2, 1, 2, 2, 2, 3, 4, 2],
    toMove = 2;
moveElementToEnd(ar, toMove)
console.log(ar);