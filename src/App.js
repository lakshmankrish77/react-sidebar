import React, { useState } from 'react';
import './Global-style.css';

import store from './redux/store';
import { Provider } from 'react-redux';
import { AppRouter } from './routers/AppRouter';

export default function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}
