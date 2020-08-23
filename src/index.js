import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Rutas from './pages/Rutas';
import { Provider } from 'react-redux';
import { store, persistor} from './store';
import { PersistGate } from "redux-persist/integration/react";
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

