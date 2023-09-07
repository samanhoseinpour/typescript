import ReactDOM from 'react-dom';

import GuestsList from './state/GuestsList';

const App = () => {
  return (
    <div>
      <GuestsList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
