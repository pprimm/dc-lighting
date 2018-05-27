import { sequence } from 'cerebral'
import { debounce } from 'cerebral/operators'
import {
  dimChangeState,
  dimDragStart,
  dimDragEnd,
  dimUpdateMqtt,
  switchChangeAction,
  selectSceneAction
} from './actions'

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
  debounce(15),
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