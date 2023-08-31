import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchRaeder = MatchReader.fromCsv('matches.csv');
matchRaeder.load();

const summary = Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchRaeder.matches);

export default matchRaeder;
