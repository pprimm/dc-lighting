import React from 'react'
import AppContainer from './AppContainer'
import Header from './Header'
import List from '../List'
import ListHeader from '../ListHeader'
import LightSceneItem from '../LightSceneItem'
import LightDimItem from '../LightDimItem'
import styled from 'styled-components'

const Divider = styled.div`
  border-top-width: 1px;
  border-bottom-width: 0;
  border-style: solid;
  border-color: #34495e;
`

const App = () =>
  <AppContainer>
    <Header title="Lights" />
    <List>
      <ListHeader>Scenes</ListHeader>
      <LightSceneItem label={"Good Night"} active={false} />
      <Divider />
      <LightSceneItem label={"Good Morning"} active={true} />
      <Divider />
      <LightSceneItem label={"Day"} active={false} />
      <Divider />
      <LightSceneItem label={"Evening"} active={false} />
      <Divider />
      <LightSceneItem label={"Early Morning"} active={false} />
      <ListHeader>Devices</ListHeader>
      <LightDimItem />
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

export default App