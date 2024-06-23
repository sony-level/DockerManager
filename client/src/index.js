import React , { useState,useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import Routes from './routes'
import { store } from './store'
import Loading from './components/loading'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('isFirstVisit');
    if (isFirstVisit === 'false') {
      setIsLoading(false);
    }
  }, []);

  const handleStart = () => {
    localStorage.setItem('isFirstVisit', 'false');
    localStorage.setItem('lastActivity', Date.now());
    setIsLoading(false);
  };

  useEffect(() => {
    const handleActivity = () => {
      localStorage.setItem('lastActivity', Date.now());
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keypress', handleActivity);

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keypress', handleActivity);
    };
  }, []);

  useEffect(() => {
    const checkInactivity = () => {
      const lastActivity = localStorage.getItem('lastActivity');
      if (lastActivity && Date.now() - lastActivity > 3600000) {
        setIsLoading(true);
        localStorage.setItem('isFirstVisit', 'true');
      }
    };

    const interval = setInterval(checkInactivity, 60000); // Vérifiez toutes les minutes

    return () => clearInterval(interval);
  }, []);

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