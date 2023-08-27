import { MatchResult } from './MatchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('matches.csv');
const matchRaeder = new MatchReader(csvFileReader);
matchRaeder.load();

let manUnitedWin = 0;

for (let match of matchRaeder.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`The man united won ${manUnitedWin} games.`);
