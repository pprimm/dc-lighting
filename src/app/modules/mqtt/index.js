import { Module } from 'cerebral'
import MQTTProvider from './MQTTProvider'
import * as sequences from './sequences'

export default options => {
  return Module(({ name, controller }) => {
    //console.log(`Module ${name} factory called with options: ${JSON.stringify(options)}`)

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
        mqttInit: sequences.initialize,
        mqttSetDeviceState: sequences.mqttSetDeviceState,
        mqttSetViewState: sequences.mqttSetViewState,
      }, 
      providers: {
        [name]: MQTTProvider(options),
      },
    }
  })
}