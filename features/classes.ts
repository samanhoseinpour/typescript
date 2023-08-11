class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('Beeep');
  }

  speed(): void {
    console.log('I have an speed');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  driveProcess(): void {
    this.honk();
    this.speed();
  }

  honk(): void {
    console.log('booop');
  }

  speed(): void {
    console.log('The lambo is 340 km/h');
  }
}

const vehicle = new Vehicle('orange');
const lambo = new Car(4, 'yellow');

lambo.speed();
lambo.honk();
lambo.color;
