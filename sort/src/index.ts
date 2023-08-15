import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([100, -5, 0, 50]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection);
