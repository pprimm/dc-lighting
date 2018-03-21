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
      appMounted: sequences.initialize
    },
    modules: {
      dev,
      mqtt: MQTTModule({
        someOption: "option value"
      }),
    },
    providers: {
    }
  }
})