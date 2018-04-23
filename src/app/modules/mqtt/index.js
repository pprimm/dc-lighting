import { Module } from 'cerebral'
import { sequence } from 'cerebral'
import { when, debounce } from 'cerebral/operators'
import MQTTProvider from './MQTTProvider'

function providerInitialize(context) {
  context.mqtt.announce("I'm here!!!")
  const mqttSetDeviceState = context.controller.getSignal('mqtt.mqttSetDeviceState')
  //console.log(mqttSetDeviceState)
  const mqttSetViewState = context.controller.getSignal('mqtt.mqttSetViewState')
  //console.log(mqttSetViewState)
  context.mqtt.initialize({
    mqttDevSignal: mqttSetDeviceState,
    mqttViewSignal: mqttSetViewState
  })
  context.mqtt.connect()
}

const initialize = sequence('Initialize for MQTT Module', [
  providerInitialize
])

function mqttToDeviceEval({props,state}) {
  const [device, property] = props.path.split('.')
  props.mute = (property === "level" && state.get(`dev.${device}.muteMqtt`))
}

function mqttToDeviceState({props,state}) {
  if (!props.mute) {
    state.set(`dev.${props.path}`, props.value)
  }
}

const mqttSetDeviceState = sequence('Set dev state from MQTT', [
  mqttToDeviceEval,
  mqttToDeviceState
])

function mqttToViewState({props,state}) {
  state.set(`view.${props.path}`, JSON.parse(props.value))
}

const mqttSetViewState = sequence('Set view state from MQTT', [
  mqttToViewState
])

export default options => {
  return Module(({ name, controller }) => {
    console.log(`Module ${name} factory called with options: ${JSON.stringify(options)}`)

    controller.once('initialized:model', () => {
      console.log(`initialized:model called in module ${name}`)
    })

    controller.once('initialized', () => {
      console.log(`initialized called in module ${name}`)
      controller.getSignal(`${name}.mqttInit`)({options: options})
    })

    return {
      state: {
        connected: false
      },
      signals: {
        mqttInit: initialize,
        mqttSetDeviceState: mqttSetDeviceState,
        mqttSetViewState: mqttSetViewState,
      }, 
      providers: {
        [name]: MQTTProvider(options),
      },
    }
  })
}