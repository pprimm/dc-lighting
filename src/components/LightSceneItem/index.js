import React from 'react'
import styled, { withTheme} from 'styled-components'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaCheck from 'react-icons/lib/fa/check'
import {connect} from '@cerebral/react'
import {state, props, signal} from 'cerebral/tags'
import Container from './Container'
import IconArea from './IconArea'
import LabelArea from './LabelArea'

const LightSceneItem = ({ label, devID, scene, selectScene, theme }) => {
  const active = scene === label
  const onClick = () => {
    selectScene({id: devID, newScene: label})
  }
  return (
    <Container onClick={ onClick } >
      <IconArea active={active} selectedColor={theme.testColor} >
        <FaLightbulbO size={'1.2em'} />
      </IconArea>
      <LabelArea>{label}</LabelArea>
      <IconArea active={active}>
        { active && <FaCheck size={'1.2em'} />}
      </IconArea>
    </Container>
  )
}

export default withTheme(connect({
  scene: state`dev.${props`devID`}.scene`,
  selectScene: signal`dev.selectScene`
}, 
  LightSceneItem
))