import React from 'react'
import styled from 'styled-components'
import FaLightbulbO from 'react-icons/lib/fa/lightbulb-o'
import FaCheck from 'react-icons/lib/fa/check'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  height: 2.5em;
`

const IconArea = styled.div`
  color: ${props => props.active ?
    props.theme.lightOnDark :
    props.theme.lightText};
  min-width: 2em;
  margin: auto 0.2em;
  text-align: center;
`

const LabelArea = styled.div`
  color: ${props => props.theme.lightText};
  margin: auto;
  flex: 1 0;
  font-size: 0.8em;
`

const LightSceneItem = ( { label,active } ) => {
  const handler = event => {
    event.preventDefault()
    console.log(`${label} selected`)
  }
  return (
    <Container onClick={ handler } >
      <IconArea active={active}>
        <FaLightbulbO size={'1.2em'} />
      </IconArea>
      <LabelArea color={'white'} >
        {label}
      </LabelArea>
      <IconArea active={active}>
        { active && <FaCheck size={'1.2em'} />}
      </IconArea>
    </Container>
  )
}

export default LightSceneItem