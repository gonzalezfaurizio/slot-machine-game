const ROWS = 3;
const COLS = 3;
const SYMBOLS_COUNT = {
  A: 2,
  B: 4,
  C: 6,
  D: 8,
};
const SYMBOLS_VALUES = {
  A: 5,
  B: 4,
  C: 3,
  D: 2,
};

// Gira los carretes y devuelve los símbolos seleccionados
const spin = () => {
  const symbols = [];
  for (const [symbol, count] of Object.entries(SYMBOLS_COUNT)) {
    for (let i = 0; i < count; i++) {
      symbols.push(symbol);
    }
  }

  const reels = Array.from({ length: COLS }, () => []);
  for (let i = 0; i < COLS; i++) {
    const reelSymbols = [...symbols];
    for (let j = 0; j < ROWS; j++) {
      const randomIndex = Math.floor(Math.random() * reelSymbols.length);
      reels[i].push(reelSymbols[randomIndex]);
      reelSymbols.splice(randomIndex, 1);
    }
  }
  return reels;
};

// Transpone la matriz para obtener las filas de los carretes
const transpose = (matrix) =>
  matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));

// Calcula las ganancias basadas en las líneas ganadoras
const getWinnings = (rows, bet, lines) => {
  let winnings = 0;
  for (let row = 0; row < lines; row++) {
    if (rows[row].every((symbol) => symbol === rows[row][0])) {
      winnings += bet * SYMBOLS_VALUES[rows[row][0]];
    }
  }
  return winnings;
};

module.exports = {
  spin,
  transpose,
  getWinnings,
};
