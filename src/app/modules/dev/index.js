import { Module } from 'cerebral'
import * as sequences from './sequences'


export default Module({
  state: {
    dev01: {
      scene: "Good Morning"
    },
    dev02: {
      level: 50
    },
    dev03: {
      level: 50
    },
    dev04: {
      switch: true
    },
    dev05: {
      switch: false
    },
  },
  signals: {
    selectDimControl: sequences.changeDimLevel,
    selectSwitch: sequences.changeSwitch
  }
})