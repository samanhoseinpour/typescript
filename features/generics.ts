class ArrayOfDataStructures<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const arrayOfNumbers = new ArrayOfDataStructures([10, 20, 30, 40]);
arrayOfNumbers.get(1);

// Function Generics

const printDataStructures = <T>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
};

printDataStructures(['a', 'b', 'c', 'd', 'e']);

// Generics constraints

class Car {
  print(): void {
    console.log('Hi im a  Car');
  }
}

class House {
  print(): void {
    console.log('Hi im a House');
  }
}

interface Printable {
  print(): void;
}

const printHouseAndCar = <T extends Printable>(arr: T[]): void => {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
};

printHouseAndCar<House>([new House(), new House()]);
printHouseAndCar<Car>([new Car(), new Car()]);
