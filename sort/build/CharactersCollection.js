"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.collection = collection;
    }
    get length() {
        return this.collection.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.collection[leftIndex].localeCompare(this.collection[rightIndex]) > 0);
    }
    swap(leftIndex, rightIndex) {
        const characters = this.collection.split('');
        const leftHand = characters[leftIndex];
        characters[leftIndex] = characters[rightIndex];
        characters[rightIndex] = leftHand;
        this.collection = characters.join('');
    }
}
exports.CharacterCollection = CharacterCollection;
