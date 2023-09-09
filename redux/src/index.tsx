import ReactDOM from 'react-dom';

import { RepositoriesList } from './components/RepositoriesList';

const App: React.FC = () => {
  return (
    <div>
      <RepositoriesList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
