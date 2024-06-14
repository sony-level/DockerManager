import React , { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import Routes from './routes'
import { store } from './store'
import Loading from './components/loading'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleStart = () => {
    setIsLoading(false);
  };

  return (
    isLoading ? <Loading onStart={handleStart} /> :
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

/** 
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
  */