import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './styles/GlobalStyles';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store'

ReactDOM.render(

  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyle />
    </Provider>
  </React.StrictMode>,

  document.getElementById('root')
);

reportWebVitals();
