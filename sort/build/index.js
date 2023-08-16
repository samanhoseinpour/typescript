"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Sorting Number Collection
const numberCollection = new NumbersCollection_1.NumbersCollection([-10, 300, 4, -2, 10]);
const sortNumberCollection = new Sorter_1.Sorter(numberCollection);
sortNumberCollection.sort();
console.log(numberCollection.collection);
// Sorting String Collection
const characterCollection = new CharactersCollection_1.CharacterCollection('absfjaijsaiffanvbcnzopfjogjeiqihigurXOAJOFSAFKASOFpasF');
const sortCharacterCollection = new Sorter_1.Sorter(characterCollection);
sortCharacterCollection.sort();
console.log(sortCharacterCollection.collection);
// Sorting LinkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(-4);
linkedList.add(-2);
linkedList.add(10);
const sortLinkedList = new Sorter_1.Sorter(linkedList);
sortLinkedList.sort();
linkedList.print();
