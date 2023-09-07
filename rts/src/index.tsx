import ReactDOM from 'react-dom';

import EventComponent from './EventComponent';

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

export default App;
