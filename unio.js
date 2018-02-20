let unio = [];

let tomb1 = [1, 2, 3, 4, 5];

let tomb2 = [3, 4, 5, 6, 7];

let i = 0;

let k;

let j;

for (i = 0; i <= tomb1.length-1; i++) {
  unio[i] = tomb1[i];
} 

k = tomb1.length;

for (j = 0; j <= tomb2.length-1; j++) {
  i = 0;
  while (i < tomb1.length && tomb2[j] != tomb1[i]) {
    i++;
  }
  if (i >= tomb1.length) {
    unio[k] = tomb2[j];
    k++;
  }
}
console.log(unio);