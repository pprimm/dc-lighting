import { Module } from 'cerebral'
import { sequence } from 'cerebral'
import MQTTProvider from './MQTTProvider'

function providerInitialize(context) {
  console.log(context)
  context.mqtt.announce("I'm here!!!")
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
      signals: {
        mqttInit: initialize
      }, 
      providers: {
        [name]: MQTTProvider(options),
      },
    }
  })
}