import { sequence } from 'cerebral'
import {
  providerInitialize,
  mqttToDeviceEval,
  mqttToDeviceState,
  mqttToViewState
} from './actions'

export const initialize = sequence('Initialize for MQTT Module', [
  providerInitialize
])

export const mqttSetDeviceState = sequence('Set dev state from MQTT', [
  mqttToDeviceEval,
  mqttToDeviceState
])

export const mqttSetViewState = sequence('Set view state from MQTT', [
  mqttToViewState
])