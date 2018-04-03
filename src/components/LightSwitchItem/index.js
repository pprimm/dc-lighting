import React from 'react'
import styled from 'styled-components'
import Switch from 'rc-switch'
import 'rc-switch/assets/index.css'
import {connect} from '@cerebral/react'
import {state, props, signal} from 'cerebral/tags'

const Container = styled.div`
  display: flex;
  flex-direction: row;
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

const LightSwitchItem = ({ label, devID, value, selectSwitch}) => {
  const switchChange = (newValue) => {
    selectSwitch({id: devID, newValue: newValue})
  }
  return (
    <Container>
      <LabelArea>
        {label}
      </LabelArea>
      <SwitchArea>
        <Switch checked={value === "true" ? true : false} onChange={switchChange} />
      </SwitchArea>
    </Container>
  )
}

export default connect({
  value: state`dev.${props`devID`}.switch`,
  selectSwitch: signal`dev.selectSwitch`
},
  LightSwitchItem
)