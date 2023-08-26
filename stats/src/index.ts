import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';

const reader = new MatchReader('matches.csv');
reader.read();

let manUnitedWin = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`The man united won ${manUnitedWin} games.`);
