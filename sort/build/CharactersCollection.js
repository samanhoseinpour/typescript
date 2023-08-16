"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(collection) {
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
