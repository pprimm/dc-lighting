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
      <LightDimItem
        label={"Ceiling Light"}
        value={50}
      />
      <Divider />
      <LightDimItem
        label={"Chandelier"}
        value={50}
      />
      <Divider />
      <LightSwitchItem
        label={"Flood Lights"}
        active={false}
      />
      <Divider />
      <LightSwitchItem
        label={"Lamp"}
        active={true}
      />
      <Divider />
    </List>
  </AppContainer>

export default App