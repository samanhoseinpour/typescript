import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('matches.csv');
const matchRaeder = new MatchReader(csvFileReader);
matchRaeder.load();

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchRaeder.matches);

export default matchRaeder;
