const fs = require("fs");

fs.readFile("puzzle2.txt", "utf8", function (err, data) {
  if (err) {
    return console.log(err);
  } else {
    const fileLines = data.split("\n");
    const pieces = fileLines.slice(1);

    if (pieces.length === 0) {
      return console.log(`Löytyy 0 ratkaisu(a) tälle palapelille`);
    }

    const piecesAndCounts = pieces.reduce((p, c) => {
      if (p[c]) p[c] = p[c] + 1;
      else p[c] = 1;
      return p;
    }, {});

    const factorial = (n) => (!(n > 1) ? 1 : factorial(n - 1) * n);
    const permutations = Object.values(piecesAndCounts)
      .map(factorial)
      .reduce((p, c) => p * c, 1);

    const result = `Löytyy ${permutations} ratkaisu(a) tälle palapelille`;

    console.log(result);
  }
});
