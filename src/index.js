import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux'
// import  {store} from './components/redux/store'
import { persistor, store } from './components/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
  <PersistGate persistor={persistor} loading={null}>
 <React.StrictMode> 
      <App /> 
  </React.StrictMode>
    </PersistGate>
  </Provider>
);
