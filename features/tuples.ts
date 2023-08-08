const drink = {
  color: 'brown',
  corbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 30];
const tea: Drink = ['brown', false, 0];
