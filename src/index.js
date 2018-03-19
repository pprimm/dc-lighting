import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { ThemeProvider } from 'styled-components'

const theme = {
  darkBG: '#2c3e50',
  lightBG: '#34495e',
  lightText: '#ecf0f1',
  listLightBG: '#2c3e50',
  lightOnDark: '#f39c12',
  lightOnLight: '#f1c40f'
}

ReactDOM.render(
  <ThemeProvider  theme={theme}>
    <App />
  </ThemeProvider>, document.getElementById('root'));
registerServiceWorker();
