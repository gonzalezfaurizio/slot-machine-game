let balance = 0;

// Actualiza el balance mostrado en la interfaz
const updateBalance = () => {
  document.getElementById("balance").innerText = `Balance: $${balance.toFixed(
    2
  )}`;
};

// Maneja la acción de depósito
const deposit = () => {
  const depositAmount = parseFloat(document.getElementById("deposit").value);
  if (!isNaN(depositAmount) && depositAmount > 0) {
    balance += depositAmount;
    updateBalance();
    document.getElementById("deposit").value = "";
  } else {
    alert("Invalid deposit amount.");
  }
};

// Muestra los símbolos de los carretes con un retraso para la animación
const showReelSymbols = (reelElement, reelSymbols, delay) => {
  reelElement.innerHTML = "";

  for (const element of reelSymbols) {
    const span = document.createElement("span");
    span.innerText = element;
    reelElement.appendChild(span);
  }

  const spans = reelElement.querySelectorAll("span");

  setTimeout(() => {
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add("visible");
      }, index * 500); // Retraso entre cada símbolo
    });
  }, delay);
};

// Maneja la acción de girar los carretes
const spin = () => {
  const numberOfLines = parseInt(document.getElementById("lines").value);
  const bet = parseFloat(document.getElementById("bet").value);

  if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
    alert("Invalid number of lines. Please enter a number between 1 and 3.");
    return;
  }

  if (isNaN(bet) || bet <= 0 || bet > balance / numberOfLines) {
    alert(
      `Invalid bet amount. Your maximum bet per line is $${(
        balance / numberOfLines
      ).toFixed(2)}.`
    );
    return;
  }

  balance -= bet * numberOfLines;
  updateBalance();

  fetch("/spin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ bet, numberOfLines }),
  })
    .then((response) => response.json())
    .then((data) => {
      const reels = data.reels;
      const reelElements = document.getElementsByClassName("reel");

      for (let i = 0; i < reelElements.length; i++) {
        showReelSymbols(reelElements[i], reels[i], i * 1000);
      }

      setTimeout(() => {
        document.getElementById(
          "result"
        ).innerText = `You won $${data.winnings.toFixed(2)}`;
        balance += data.winnings;
        updateBalance();
      }, reelElements.length * 1000 + 2000); // Ajuste de retraso para los resultados
    });
};
