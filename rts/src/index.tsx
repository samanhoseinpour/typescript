import ReactDOM from 'react-dom';

import Parent from './props/Parent';

const App = () => {
  return (
    <div>
      <Parent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
