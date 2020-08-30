import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rutas from './pages/Rutas';
import { Provider } from 'react-redux';
import stores from './store';
import { PersistGate } from "redux-persist/integration/react";

const {store, persistor} = stores();
 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Rutas />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

