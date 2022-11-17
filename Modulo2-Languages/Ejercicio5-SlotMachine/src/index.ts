const generateRandomBoolean = () => Math.random() >= 0.5;

class SlotMachine {
  coins: number;
  constructor() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const roulette1 = generateRandomBoolean();
    const roulette2 = generateRandomBoolean();
    const roulette3 = generateRandomBoolean();

    console.log(
      "Result for attempt " +
        this.coins +
        " is: " +
        roulette1 +
        "||" +
        roulette2 +
        "||" +
        roulette3
    );

    if (roulette1 && roulette2 && roulette3) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.coins = 0;
    } else {
      console.log("Good luck next time!!");
    }
  }
}

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
