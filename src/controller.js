import { Controller } from 'cerebral'
import Devtools from 'cerebral/devtools'

import app from './app'

const devtools =
  process.env.NODE_ENV === 'production'
    ? null
    : Devtools({ host: 'localhost:8585', reconnect: false })

export default Controller(app, {
  devtools,
  stateChanges: {
    dev: {    
      dev01: {
        scene: "Off"
      },
      dev02: {
        level: "0"
      },
      dev03: {
        level: "0"
      },
      dev04: {
        switch: "false"
      },
      dev05: {
        switch: "false"
      }
    }
  }
})