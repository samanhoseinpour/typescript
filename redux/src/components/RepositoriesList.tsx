import { useState } from 'react';
import { useActions } from '../hooks/useActions';

import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [searchRepository, setSearchRepository] = useState('');
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  const submitSearchRepository = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(searchRepository);
  };

  return (
    <div>
      <form onSubmit={submitSearchRepository}>
        <input
          value={searchRepository}
          onChange={(e) => setSearchRepository(e.target.value)}
        />
        <button>search</button>
      </form>
      <ul>
        {data &&
          data.map((packages: string) => <li key={packages}>{packages}</li>)}
        {loading && <h3>Loading...</h3>}
        {error && <h3>{error}</h3>}
      </ul>
    </div>
  );
};

export default RepositoriesList;
