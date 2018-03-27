import { Module } from 'cerebral'

import dev from './modules/dev'
import MQTTModule from './modules/mqtt'
import * as sequences from './sequences'

export default Module(({ controller }) => {
  controller.on('initialized', () => {
    controller.getSignal('appMounted')({})
  })
  return {
    state: {

    },
    signals: {
      appMounted: sequences.initialize,
    },
    modules: {
      dev,
      mqtt: MQTTModule({
        mqttUrl: 'ws://10.10.101.29:8083/mqtt',
        mqttOptions: {
          username: 'webClient',
          password: 'public',
          keepAlive: 10,
          queueQoSZero: false,
        },
        deviceMqttRoot: 'dev',
        deviceList: ['dev01','dev02','dev03','dev04','dev05'],
        viewRoot: 'view',
      }),
    },
    providers: {
    }
  }
})