import { sequence } from 'cerebral'
import { debounce } from 'cerebral/operators'

function dimChangeState({props,state}) {
  state.set(`dev.${props.id}.level`, props.newValue)
}

function dimDragStart({props,state}) {
  state.set(`dev.${props.id}.muteMqtt`, true)
}

function dimDragEnd({props,state}) {
  state.set(`dev.${props.id}.muteMqtt`, false)
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

export const startDimDrag = sequence('Start Dim Drag', [
  dimDragStart,
  dimUpdateMqtt
])

export const endDimDrag = sequence('End Dim Drag', [
  dimDragEnd,
  dimUpdateMqtt
])

//* changeDimLevel direct to mqtt
export const changeDimLevel = sequence('Change Dim Level Drag', [
  debounce(25),
  {
    continue: [dimChangeState, dimUpdateMqtt],
    discard: [dimChangeState]
  }
])/**/

/* Debounced changeDimLevel
export const changeDimLevel = sequence('Change Dim Level', [
  debounce(30), {
    continue: [dimUpdateMqtt],
    discard: [dimChangeState]
  }
])/**/

export const changeSwitch = sequence('Change Switch Value', [
  switchChangeAction
])

export const selectScene = sequence('Select a Scene', [
  selectSceneAction
])