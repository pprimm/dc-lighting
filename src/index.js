import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { ThemeProvider } from 'styled-components'
import { Container } from '@cerebral/react'
import controller from './controller'

const theme = {
  darkBG: '#091C2A',
  lightBG: '#34495e',
  lightText: '#ecf0f1',
  listLightBG: '#2c3e50',
  lightOnDark: '#f39c12',
  lightOnLight: '#f1c40f',
  testColor: '#e74c3c'
}

ReactDOM.render(
  <Container controller={controller}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Container>, document.getElementById('root'))
registerServiceWorker()
