import { Module } from 'cerebral'
import * as sequences from './sequences'


export default Module({
  state: {
  },
  signals: {
    selectDimControl: sequences.changeDimLevel,
    selectSwitch: sequences.changeSwitch
  }
})