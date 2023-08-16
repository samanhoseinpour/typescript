import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';

const numbersCollection = new NumbersCollection([100, -5, 0, 50]);
const charactersCollection = new CharacterCollection(
  'aBsakofsoafksamvanAsjfiasjfaoskfao'
);

const sortNumbersCollection = new Sorter(numbersCollection);
const sorterStringCollection = new Sorter(charactersCollection);

sortNumbersCollection.sort();
sorterStringCollection.sort();

console.log(sortNumbersCollection, sorterStringCollection);
