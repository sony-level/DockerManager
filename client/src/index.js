import React , { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import Routes from './routes'
import { store } from './store'
import Loading from './components/loading'


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isInactive, setIsInactive] = useState(false);

  const handleStart = () => {
    setIsLoading(false);
    localStorage.setItem('appLaunched', 'true');
  };

  const resetInactivityTimer = useCallback(() => {
    setIsInactive(false);
    clearTimeout(window.inactivityTimer);
    window.inactivityTimer = setTimeout(() => {
      setIsInactive(true);
    }, 3600000); // 1 heure en millisecondes
  }, []);

  useEffect(() => {
    const firstLaunch = localStorage.getItem('appLaunched') !== 'true';
    if (firstLaunch) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    window.addEventListener('mousemove', resetInactivityTimer);
    window.addEventListener('keypress', resetInactivityTimer);

    resetInactivityTimer(); // Initialiser le timer au démarrage

    return () => {
      window.removeEventListener('mousemove', resetInactivityTimer);
      window.removeEventListener('keypress', resetInactivityTimer);
      clearTimeout(window.inactivityTimer);
    };
  }, [resetInactivityTimer]);

  return (
    (isLoading || isInactive) ? <Loading onStart={handleStart} /> :
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