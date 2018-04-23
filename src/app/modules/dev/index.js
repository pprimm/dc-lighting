import { Module } from 'cerebral'
import * as sequences from './sequences'


export default Module({
  state: {
  },
  signals: {
    dragDimControl: sequences.changeDimLevel,
    dragStartDimControl: sequences.startDimDrag,
    dragEndDimControl: sequences.endDimDrag,
    selectSwitch: sequences.changeSwitch,
    selectScene: sequences.selectScene,
  }
})