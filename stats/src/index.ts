import fs from 'fs';

const matches = fs
  .readFileSync('matches.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row): string[] => {
    return row.split(',');
  });

console.log(matches);

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWin = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWin++;
  }
}

console.log(`The man united won ${manUnitedWin} games.`);
