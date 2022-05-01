import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from "./GlobalStyles";
import { ThemeProvider } from 'styled-components';
import theme from "../src/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
