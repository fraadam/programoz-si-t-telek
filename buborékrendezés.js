let tomb = [5, 2, 3, 1, 4];

for (let i = tomb.length - 1; i > 0; i--) {
  for (let j = 0; j < tomb[i]; j++) {
    if (tomb[j] > tomb[j + 1]) {
      let b = tomb[ j + 1 ];
      tomb[ j + 1 ] = tomb[j];
      tomb[j] = b;
    }
  }
} console.log(tomb);
