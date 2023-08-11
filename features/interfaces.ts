interface SummaryGiven {
  summary(): string;
}

const lamborghini = {
  carName: 'Aventador',
  year: new Date().getFullYear(),
  isElectric: false,
  summary(): string {
    return `The car model is ${this.carName} and it was made on ${this.year}, is it electric? ${this.isElectric} `;
  },
};

const drink = {
  color: 'brown',
  drinkName: 'pepsi',
  sugar: 40,
  carbonated: true,
  summary(): string {
    return `This drink color is ${this.color} and the name of the drink is ${this.drinkName}. The size of sugar is ${this.sugar} and is it carbonated? ${this.carbonated}`;
  },
};

const printSummary = (item: SummaryGiven): void => {
  console.log(item.summary());
};

printSummary(lamborghini);
printSummary(drink);
