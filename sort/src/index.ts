console.log('123');

export class Product {
  constructor(public price: number) {
    this.price = price;
  }

  calcTotalPrice(): void {
    console.log(this.price);
  }
}
