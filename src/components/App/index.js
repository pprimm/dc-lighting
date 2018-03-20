import React from 'react'
import AppContainer from './AppContainer'
import Header from './Header'
import List from '../List'
import ListHeader from '../ListHeader'
import LightSceneItem from '../LightSceneItem'
import LightDimItem from '../LightDimItem'
import LightSwitchItem from '../LightSwitchItem'
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
      <LightSceneItem label={"Good Night"} devID={"dev01"} />
      <Divider />
      <LightSceneItem label={"Good Morning"} devID={"dev01"} />
      <Divider />
      <LightSceneItem label={"Day"} devID={"dev01"} />
      <Divider />
      <LightSceneItem label={"Evening"} devID={"dev01"} />
      <Divider />
      <LightSceneItem label={"Early Morning"} devID={"dev01"} />
      <Divider />
      <LightSceneItem label={"Off"} devID={"dev01"} />
      <ListHeader>Devices</ListHeader>
      <LightDimItem
        label={"Ceiling Light"}
        devID={"dev02"}
      />
      <Divider />
      <LightDimItem
        label={"Chandelier"}
        devID={"dev03"}
      />
      <Divider />
      <LightSwitchItem
        label={"Flood Lights"}
        devID={"dev04"}
      />
      <Divider />
      <LightSwitchItem
        label={"Lamp"}
        devID={"dev05"}
      />
      <Divider />
    </List>
  </AppContainer>

export default App