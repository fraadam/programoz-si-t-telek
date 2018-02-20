function masolas (innenTomb) {
  let i = 0;
  for (i = 0; i < innenTomb.length; i++) {
    ideTomb[i] = innenTomb[i] * 2;
  } return ideTomb;
}
let innenTomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let ideTomb = [];

let eredmeny = masolas(innenTomb);

console.log(eredmeny);
