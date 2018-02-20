function szetvalogatas (innenTomb) {
  let i = 0;

  let j = 0;

  let k = 0;

  let ideTomb = [];

  let ideTomb1 = [];

  for (i = 0; i < innenTomb.length; i++) {
    if ((innenTomb[i] % 2) === 0) {
      ideTomb[j] = innenTomb[i];
      j++;
    } else {
      ideTomb1[k] = innenTomb[i];
      k++;
    }
  }
  return {paros: ideTomb, paratlan: ideTomb1};
}
let innenTomb = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(szetvalogatas(innenTomb));
