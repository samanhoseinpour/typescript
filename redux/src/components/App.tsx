import { Provider } from 'react-redux';
import { store } from '../store';

import RepositoriesList from './RepositoriesList';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Search for Packages</h1>
      <RepositoriesList />
    </Provider>
  );
};

export default App;
