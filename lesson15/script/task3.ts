class MultChecker {
  numberBeChecked: number;
  numberCorrectAnswers: number;
  numberNoCorrectAnswers: number;

  constructor(
    numberBeChecked: number
    // numberCorrectAnswers: number,
    // numberNoCorrectAnswers: number
  ) {
    this.numberBeChecked = numberBeChecked;
    this.numberCorrectAnswers = 0;
    this.numberNoCorrectAnswers = 0;
  }

  generatingAnExample() {
    return Math.floor(Math.random() * 10) + 1;
  }
  /**
   * Перевіряє відповідь користувача
   * @param userAnswer  відповідь користувача
   * @param multiplier  другий множник (той, що був згенерований)
   */
  checkingCorrectnessAnswer(userAnswer: number, multiplier: number): boolean {
    const correct = this.numberBeChecked * multiplier;
    if (userAnswer === correct) {
      this.numberCorrectAnswers++;
      return true;
    } else {
      this.numberNoCorrectAnswers++;
      return false;
    }
  }

  render() {
    document.body.innerHTML += `
     <p>Перевірка множення на: <b>${this.numberBeChecked}</b></p>
      <p>Правильних відповідей: <b>${this.numberCorrectAnswers}</b></p>
      <p>Неправильних відповідей: <b>${this.numberNoCorrectAnswers}</b></p>`;
  }
}

const checker = new MultChecker(7);

const multiplier = checker.generatingAnExample();
const userInput = Number(prompt(`Скільки буде 7 × ${multiplier}?`));

checker.checkingCorrectnessAnswer(userInput, multiplier);

checker.render();
