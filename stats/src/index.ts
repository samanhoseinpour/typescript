import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';

const csvFileReader = new CsvFileReader('matches.csv');
const matchRaeder = new MatchReader(csvFileReader);
matchRaeder.load();

export default matchRaeder;
