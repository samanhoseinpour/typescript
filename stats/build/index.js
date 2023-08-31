"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const csvFileReader = new CsvFileReader_1.CsvFileReader('matches.csv');
const matchRaeder = new MatchReader_1.MatchReader(csvFileReader);
matchRaeder.load();
exports.default = matchRaeder;
