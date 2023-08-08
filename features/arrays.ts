const carMakers = ['bmw', 'benz', 'audi'];

const fetchLastElement = carMakers[-1];

const fetchAllCars = carMakers.map((car: string): string | void => {
  console.log(car);
});

// Flexible types
const importantDate: (string | Date)[] = [new Date()];
importantDate.push('2023-02-10');

console.log(importantDate);
