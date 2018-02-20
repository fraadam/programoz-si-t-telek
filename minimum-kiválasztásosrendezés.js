let tomb = [5, 2, 3, 1, 4];

let min = 0;

for ( i = 0; i < tomb.length; i++) {
  min = i;
  for (let j = i + 1; j < tomb.length; j++) {
    if (tomb[j] < tomb[min]) {
      min = j;
    }
  }
  if (min !== i) {
    let temp = tomb[i];
    tomb[i] = tomb[min];
    tomb[min] = temp;
  }
}
console.log(tomb);
