import { sequence } from 'cerebral'

function dimChangeAction({props,state}) {
  state.set(`dev.${props.id}.level`, props.newValue)
}

function switchChangeAction({props,state}) {
  state.set(`dev.${props.id}.switch`, props.newValue)
}

export const changeDimLevel = sequence('Change Dim Level', [
  dimChangeAction
])

export const changeSwitch = sequence('Change Switch Value', [
  switchChangeAction
])