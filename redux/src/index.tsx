import ReactDOM from 'react-dom';

import App from './components/App';

const Index: React.FC = () => {
  return (
    <div>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.querySelector('#root'));
