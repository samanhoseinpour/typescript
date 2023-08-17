"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
// Sorting Number Collection
const numberCollection = new NumbersCollection_1.NumbersCollection([-10, 300, 4, -2, 10]);
numberCollection.sort();
console.log(numberCollection.collection);
// Sorting String Collection
const characterCollection = new CharactersCollection_1.CharacterCollection('absfjaijsaiffanvbcnzopfjogjeiqihigurXOAJOFSAFKASOFpasF');
characterCollection.sort();
console.log(characterCollection.collection);
// Sorting LinkedList
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(5);
linkedList.add(-4);
linkedList.add(-2);
linkedList.add(10);
linkedList.sort();
linkedList.print();
