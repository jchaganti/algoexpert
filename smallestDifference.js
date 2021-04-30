function smallestDifference(a1, a2) {
  a1.sort((a,b) => a - b);
	a2.sort((a,b) => a - b);
	let delta = Infinity, result = null;
	for(let i = 0, j = 0; i < a1.length && j < a2.length;) {
		const diff = a1[i] - a2[j];
		if(diff === 0) {
      result = [a1[i], a2[j]];
      break;
		}
    if(Math.abs(diff) < delta) {
      delta = Math.abs(diff);
      result = [a1[i], a2[j]];
    }
    if(diff < 0) {
			i++;
		} else {
      j++;
    }		
	}
  return result;
}

const a1 = [-1, 5, 10, 20, 28, 3];
const a2 = [26, 134, 135, 15, 17];

console.log(smallestDifference(a1, a2));