"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchResult_1 = require("./MatchResult");
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader('matches.csv');
const matchRaeder = new MatchReader_1.MatchReader(csvFileReader);
matchRaeder.load();
let manUnitedWin = 0;
for (let match of matchRaeder.matches) {
    if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
        manUnitedWin++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin) {
        manUnitedWin++;
    }
}
console.log(`The man united won ${manUnitedWin} games.`);
