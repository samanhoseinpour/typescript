import { useState } from 'react';

import { useActions } from '../hooks/useActions';

const RepositoriesList: React.FC = () => {
  const [searchRepository, setSearchRepository] = useState('');
  const { searchRepositories } = useActions();

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
    </div>
  );
};

export default RepositoriesList;
