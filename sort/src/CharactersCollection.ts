export class CharacterCollection {
  constructor(public collection: string) {}

  get length(): number {
    return this.collection.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.collection[leftIndex].localeCompare(this.collection[rightIndex]) > 0
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const characters = this.collection.split('');
    const leftHand = characters[leftIndex];
    characters[leftIndex] = characters[rightIndex];
    characters[rightIndex] = leftHand;
    this.collection = characters.join('');
  }
}
