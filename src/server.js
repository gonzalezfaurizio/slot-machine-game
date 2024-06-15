const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { spin, transpose, getWinnings } = require("./gameLogic");
const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../public")));

// Maneja la solicitud de giro
app.post("/spin", (req, res) => {
  const { bet, numberOfLines } = req.body;
  const reels = spin();
  const rows = transpose(reels);
  const winnings = getWinnings(rows, bet, numberOfLines);

  res.json({ reels: rows, winnings });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
