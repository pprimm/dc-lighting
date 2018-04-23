import React from 'react'
import List from '../List'
import ListHeader from '../ListHeader'
//import LightSceneItem from '../LightSceneItem'
//import LightDimItem from '../LightDimItem'
//import LightSwitchItem from '../LightSwitchItem'
import Divider from '../Divider'
import {connect} from '@cerebral/react'
import {state} from 'cerebral/tags'

/* here to show how to use the named export as unconnected *
import {LightSceneItem as SceneItem} from '../LightSceneItem'

//The following is example of how tag would be used in JSX
//<SceneItem label={"test"} selectScene={()=>{}} />
/**/

const components = {
  LightDimItem: require('../LightDimItem').default,
  LightSceneItem: require('../LightSceneItem').default,
  LightSwitchItem: require('../LightSwitchItem').default,
}

const LightView = ({scenes, devices}) => {
  const LightSceneItem = components['LightSceneItem']
  return (
    <List>
      <ListHeader>Scenes</ListHeader>
      {
        scenes ?
          scenes.map(item => (
            <LightSceneItem key={item.name} label={item.name} devID={item.devID} />
          )) :
          null
      }
      <ListHeader>Devices</ListHeader>
      {
        devices ?
          devices.map(item => {
            const Device = components[item.compType]
            return (
              <div key={item.devID}>
                <Device label={item.name} devID={item.devID} />
                <Divider />
              </div>
            )
          }) :
          null
      }
    </List>
  )
}

export default connect({
  scenes: state`view.lights.scenes`,
  devices: state`view.lights.devices`
},
  LightView
)
