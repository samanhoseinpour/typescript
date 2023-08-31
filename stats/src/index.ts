import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reports/ConsoleReport';
import { HtmlReport } from './reports/HtmlReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('matches.csv');
const matchRaeder = new MatchReader(csvFileReader);
matchRaeder.load();

const summary = new Summary(new WinsAnalysis('Man United'), new HtmlReport());

summary.buildAndPrintReport(matchRaeder.matches);

export default matchRaeder;
