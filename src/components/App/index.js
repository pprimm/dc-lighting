import React from 'react'
import AppContainer from './AppContainer'
import Header from './Header'
import LightView from '../LightView'

const App = () =>
  <AppContainer>
    <Header title="Lights" />
    <LightView />
  </AppContainer>

export default App