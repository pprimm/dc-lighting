import { sequence } from 'cerebral'
import { debounce } from 'cerebral/operators'

function dimChangeState({props,state,mqtt}) {
  state.set(`dev.${props.id}.level`, props.newValue)
}

function dimUpdateMqtt({props,mqtt}) {
  mqtt.updateDimLevel(props.id,props.newValue)
}

function switchChangeAction({props,mqtt}) {
  //state.set(`dev.${props.id}.switch`, props.newValue)
  mqtt.updateSwitch(props.id,props.newValue)
}

function selectSceneAction({props,mqtt}) {
  //state.set(`dev.${props.id}.scene`, props.newScene)
  mqtt.updateScene(props.id,props.newScene)
}

export const changeDimLevel = sequence('Change Dim Level', [
  debounce(50), {
    continue: [dimUpdateMqtt],
    discard: [dimChangeState]
  }
])

export const changeSwitch = sequence('Change Switch Value', [
  switchChangeAction
])

export const selectScene = sequence('Select a Scene', [
  selectSceneAction
])