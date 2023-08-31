"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
const matchRaeder = MatchReader_1.MatchReader.fromCsv('matches.csv');
matchRaeder.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchRaeder.matches);
exports.default = matchRaeder;
