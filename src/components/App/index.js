import React, { Component } from 'react'
import AppContainer from './AppContainer'
import Header from './Header'
import List from '../List'

function App () {
  return (
    <AppContainer>
      <Header title="Lights" />
      <List>
      </List>
    </AppContainer>
  )
}

export default App