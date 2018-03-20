import React from 'react'
import styled from 'styled-components'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1rem;
  height: 2.5em;
  margin auto 1em;
`
const LabelArea = styled.div`
  color: ${props => props.theme.lightText};
  margin: auto;
  flex: 1 0;
`

const SwitchArea = styled.div`
  min-width: 2em;
  margin: auto 0.2em;
  text-align: center;
`

const LightSwitchItem = ( { label,active } ) => {
  return (
    <Container>
      <LabelArea>
        {label}
      </LabelArea>
      <SwitchArea>
        <Switch checked={active} />
      </SwitchArea>
    </Container>
  )
}

export default LightSwitchItem