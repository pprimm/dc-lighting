export function providerInitialize(context) {
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

export function mqttToDeviceEval({props,state}) {
  const [device, property] = props.path.split('.')
  props.mute = (property === "level" && state.get(`dev.${device}.muteMqtt`))
}

export function mqttToDeviceState({props,state}) {
  if (!props.mute) {
    state.set(`dev.${props.path}`, props.value)
  }
}

export function mqttToViewState({props,state}) {
  state.set(`view.${props.path}`, JSON.parse(props.value))
}