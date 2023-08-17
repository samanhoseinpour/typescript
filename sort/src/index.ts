import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sorting Number Collection
const numberCollection = new NumbersCollection([-10, 300, 4, -2, 10]);
numberCollection.sort();
console.log(numberCollection.collection);

// Sorting String Collection
const characterCollection = new CharacterCollection(
  'absfjaijsaiffanvbcnzopfjogjeiqihigurXOAJOFSAFKASOFpasF'
);
characterCollection.sort();
console.log(characterCollection.collection);

// Sorting LinkedList
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-4);
linkedList.add(-2);
linkedList.add(10);

linkedList.sort();
linkedList.print();
