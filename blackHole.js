const blackHole = (n, a, b) => {
  if (n === 1) return 1;

  const matrix = [];
  const order = [];
  const startFrom = n - 1;

  const drawMatrix = () => {
    for (let i = 0; i < n; i++) {
      matrix.push([]);
      for (let j = 0; j < n; j++) matrix[i].push(null);
    }
  };

  const drawCycle = (n) => {
    const numbers = [];
    numbers.push(n - 1);

    let i = 0;
    while (n > 1) {
      if (i !== 0) numbers.push(numbers[i - 1] - 2);
      n = n - 2;
      i++;
    }

    if (numbers[numbers.length - 1] !== 1) numbers.push(1);
    return numbers;
  };

  const drawOrder = () => {
    const cycle = drawCycle(n);

    for (let index = 0; index < cycle.length; index++) {
      for (let i = 0; i < cycle[index]; i++) {
        for (let j = 0; j < 4; j++) {
          if (j === 0) {
            order.push(`${j + index}:${i + index}`);

            const nullCount = matrix
              .map((val) => val.filter((val) => val === null).length)
              .reduce((acc, prev) => acc + prev);

            if (cycle[index] == 1 && nullCount == 1) break;

            matrix[j + index][i + index] = "filled";
          }

          if (j === 1) {
            order.push(`${i + index}:${cycle[0] - index}`);
            matrix[i + index][cycle[0] - index] = "filled";
          }

          if (j === 2) {
            order.push(`${cycle[0] - index}:${cycle[0] - index - i}`);
            matrix[cycle[0] - index][cycle[0] - index - i] = "filled";
          }

          if (j === 3) {
            const formated = index === 0 ? cycle[index] : cycle[index - 1] - 1;
            order.push(`${cycle[0] - index - i}:${index}`);
            matrix[formated - i][index] = "filled";
          }
        }
      }
    }
  };

  drawMatrix();
  drawOrder();

  order.forEach((val, index) => {
    let split = val.split(":");
    matrix[`${split[0]}`][`${split[1]}`] = index + 1;
  });


  return matrix[a][b];
};
