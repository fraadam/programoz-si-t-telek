let tomb = [4, 5, 2, 7, 8, 9];

let min = tomb[0];

let i = 0;

for (i; i < tomb.length; i++) {
  if (tomb[i] < min) {
    min = tomb[i];
  }
}
console.log(min);

/* max */

let tomb1 = [4, 5, 60, 7, 8, 1];

let max = tomb[i-1];

for (i = 0; i < tomb1.length; i++) {
  if (tomb1[i] > max) {
    max = tomb1[i];
  }
}
console.log(max);
