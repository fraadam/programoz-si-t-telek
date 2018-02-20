
let i = 0;

let j;

let k = 0;

let metszettomb = [];

let tomb1 = [1, 3, 4, 6, 7, 8];

let tomb2 = [1, 3, 4, 5, 9];

for (i = 0; i < tomb1[i]; i++) {
  j = 0;
  while (j < tomb2.length && tomb2[j] != tomb1[i]) {
    j += 1;
  } 
  if (j < tomb2.length) {
    metszettomb[k] = tomb1[i];
    k += 1;
  }
} 
console.log(metszettomb);