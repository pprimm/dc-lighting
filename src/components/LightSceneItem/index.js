import React from 'react'
import styled, { withTheme} from 'styled-components'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaCheck from 'react-icons/lib/fa/check'
import {connect} from '@cerebral/react'
import {state, props, signal} from 'cerebral/tags'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 2.5em;
`

const IconArea = styled.div`
  color: ${props => props.selectedColor ?
    props.selectedColor :
    props.theme.lightText};
  min-width: 2em;
  margin: auto 0.2em;
  text-align: center;
`

const LabelArea = styled.div`
  color: ${props => props.theme.lightText};
  margin: auto;
  flex: 1 0;
`

export default withTheme(connect({
  scene: state`dev.${props`devID`}.scene`,
  selectScene: signal`dev.selectScene`
},
  function LightSceneItem ({ label, devID, scene, selectScene, theme }) {
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
))