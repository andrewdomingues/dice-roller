function start() {
  const playButton = document
    .querySelector(".play-button")
    .addEventListener("click", () => {
      const diceP1 = document.querySelector(".dice-p1 img");
      const diceP2 = document.querySelector(".dice-p2 img");
      const score = document.querySelector(".container h1");
      const diceRoller = () => Math.floor(Math.random() * 6) + 1;
      const randNum1 = diceRoller();
      const randNum2 = diceRoller();
      function compareRandNum(Num1, Num2) {
        let winner = "?";
        if (Num1 > Num2) {
          winner = "🚩 Player 1 win!";
        } else if (Num1 < Num2) {
          winner = "Player 2 win! 🚩";
        } else {
          winner = "Draw!";
        }
        return winner;
      }
      function setAttributes() {
        diceP1.setAttribute("src", `images/dice${randNum1}.png`);
        diceP2.setAttribute("src", `images/dice${randNum2}.png`);
      }
      function setScore() {
        score.textContent = compareRandNum(randNum1, randNum2);
        setAttributes();
      }
      setScore();
    });
}
start();
