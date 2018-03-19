import React from 'react'
import AppContainer from './AppContainer'
import Header from './Header'
import List from '../List'
import ListHeader from '../ListHeader'

function App () {
  return (
    <AppContainer>
      <Header title="Lights" />
      <List>
        <ListHeader>Scenes</ListHeader>
        <p>First Item</p>
        <p>some text to show something 2</p>
        <p>some text to show something 3</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>some text to show something</p>
        <p>Last Item</p>
      </List>
    </AppContainer>
  )
}

export default App