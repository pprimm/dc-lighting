import { Module } from 'cerebral'
import { sequence } from 'cerebral'
import MQTTProvider from './MQTTProvider'

function providerInitialize(context) {
  context.mqtt.announce("I'm here!!!")
  context.mqtt.connect()
}

const initialize = sequence('Initialize for MQTT Module', [
  providerInitialize
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
        mqttInit: initialize
      }, 
      providers: {
        [name]: MQTTProvider(options),
      },
    }
  })
}