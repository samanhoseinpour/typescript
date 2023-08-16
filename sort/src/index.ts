import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sorting Number Collection
const numberCollection = new NumbersCollection([-10, 300, 4, -2, 10]);
const sortNumberCollection = new Sorter(numberCollection);
sortNumberCollection.sort();
console.log(numberCollection.collection);

// Sorting String Collection
const characterCollection = new CharacterCollection(
  'absfjaijsaiffanvbcnzopfjogjeiqihigurXOAJOFSAFKASOFpasF'
);
const sortCharacterCollection = new Sorter(characterCollection);
sortCharacterCollection.sort();
console.log(sortCharacterCollection.collection);

// Sorting LinkedList
const linkedList = new LinkedList();
linkedList.add(5);
linkedList.add(-4);
linkedList.add(-2);
linkedList.add(10);

const sortLinkedList = new Sorter(linkedList);
sortLinkedList.sort();
linkedList.print();
