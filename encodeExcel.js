import {union, flatMap, sortBy} from 'lodash';

// const data = [{a: 1, b: 1, c: 1}, {b: 1, c: 1, d: 1}, {e:1}]

// const headers = union(flatMap(data, row => Object.keys(row)));

// console.log(headers)


// const arr = [0,0,0,1];
// // const arr1 = arr.map(e => e);
// let c1 = 0, c2 = arr.length - 1;

// for(let i = 0; i < c2; i++) {
//   if(arr[i] === 2) {
//     while(arr[c2] === 2) {
//       c2--;
//     }
//     arr[i] = arr[c2];
//     arr[c2] = 2;
//   } else if(arr[i] === 0) {
//     while(arr[c1] === 0) {
//       c1++;
//     }
//     arr[i] =arr[c1];
//     arr[c1] = 0;
//   }
// }

// console.log(arr)

// const sort012 = (arr) => {
//   const n = arr.length;
//   let position0=0;
//   let position2=n-1;
//   let k = 0
//   for(let i=0;i<=position2;i++){
//       if(arr[i] ==0){
//           arr[i]= arr[position0];
//           arr[position0]=0;
//           position0++;
//       } else if(arr[i] == 2) {
//           arr[i]= arr[position2];
//           arr[position2]= 2;
//           position2--;
//           i--;
//       }
//       ++k
//   }
//   console.log('k', k)
//   return arr
// }

// console.log(sort012(arr))

// function log(i) {
//   return function () {
//     console.log(i);
//   }
// }

// for(var i = 0; i < 5; i++) {
// 	setTimeout(log(i), i * 1000);
// }


for(var i = 0; i < 5; i++) {
	setTimeout(() => {
    console.log(i)
  }, i * 1000);
}
// const data = {
//   'history':
//   {
//     icon: null,
//     values: [
//       { key: 'display1', value: 'Database' },
//       { key: 'display2', value: 'Table' },
//       { key: 'display3', value: 'Tablespace' },
//       { key: 'display4', value: 'Db2 View' },
//       { key: 'display5', value: 'Db2 Plan' },
//       { key: 'display6', value: 'Stored procedure' },
//       { key: 'display7', value: 'Index' },
//       { key: 'display8', value: 'Indexspace' },
//       { key: 'display9', value: 'Partitions' },
//       { key: 'display10', value: 'Db2 sequence' },
//     ],
//     isRemovable: true,
//     removeLabel: 'Remove'
//   }
//   ,
//   'suggestions': {
//     icon: null,
//     values: [
//       { key: 'suggestion1', value: 'Row' },
//       { key: 'suggestion2', value: 'Column' },
//       { key: 'suggestion3', value: 'Primary key' },
//       { key: 'suggestion4', value: 'Secondary key' },
//       { key: 'suggestion5', value: 'Schema' },
//       { key: 'suggestion6', value: 'Object' },
//       { key: 'suggestion7', value: 'Referential integrity' },
//       { key: 'suggestion8', value: 'SQL' },
//       { key: 'suggestion9', value: 'Data' },
//       { key: 'suggestion10', value: 'Structure' },
//     ],
//     isRemovable: false
//   }
// }
// const options = Object.keys(data).flatMap((category) => (
//   data[category].values.map((item) => ( {
//     category: category,
//     item: item,
//     icon: data[category].icon,
//     isRemovable: data[category].isRemovable || false,
//     removeLabel: data[category].removeLabel || 'Remove'
//   }))
// ))


// const items = [{ key: 'A', value: 'A', selected: true }, { key: 'B', value: 'B', selected: true }, { key: 'C', value: 'C' }, { key: 'D', value: 'D' }]
// const items = [{ key: 'C', value: 'C',  selected: true }, { key: 'D', value: 'D', selected: false },{ key: 'A', value: 'A' }, { key: 'B', value: 'B', selected: true }, ]

// console.log(sortBy(items, ['selected', 'key']))

const bounces = (h, f) => {
  let count = 0;

  let delta = h;
  let prevH = h;
  while(Math.abs(delta) >= 0.01) {
    const newH = prevH * f;
    delta = prevH - newH;
    prevH = newH

    // console.log('delta', delta)
    count++;
  }
  return count;
}


const bounces1 = (h, f) => {
  let count = 0;

  while(Math.abs(h) > 0.01) {
    h = h * f;

    // console.log('h', h)
    count++;
  }
  return count;
}

// console.log(bounces(10, .2))
// console.log(bounces1(10, .2))


const pow = (x,y) => {

  if(y === 1) {
    return x;
  } else {
    return x * pow(x, y - 1)
  }
}

console.log(pow(2,3))