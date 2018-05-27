export function dimChangeState({props,state}) {
  state.set(`dev.${props.id}.level`, props.newValue)
}

export function dimDragStart({props,state}) {
  state.set(`dev.${props.id}.muteMqtt`, true)
}

export function dimDragEnd({props,state}) {
  state.set(`dev.${props.id}.muteMqtt`, false)
}

export function dimUpdateMqtt({props,mqtt}) {
  mqtt.updateDimLevel(props.id,props.newValue)
}

export function switchChangeAction({props,mqtt}) {
  //state.set(`dev.${props.id}.switch`, props.newValue)
  mqtt.updateSwitch(props.id,props.newValue)
}

export function selectSceneAction({props,mqtt}) {
  //state.set(`dev.${props.id}.scene`, props.newScene)
  mqtt.updateScene(props.id,props.newScene)
}