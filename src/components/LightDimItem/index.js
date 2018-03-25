import React from 'react'
import styled from 'styled-components'
import FaCircleO from 'react-icons/lib/fa/circle-o'
import FaCircle from 'react-icons/lib/fa/circle'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import {connect} from '@cerebral/react'
import {state, props, signal} from 'cerebral/tags'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.lightText};
  margin 0 8px 8px 8px;
`

const TopArea = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 1em;
  margin: 0.5em 0.5em 0 0.5em;
`

const BottomArea = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 2em;
`

const TopLabel = styled.div`
  flex: 1 0 auto;
`

const TopValue = styled.div`
  flex: 0 1 auto;
`
const BottomIcon = styled.div`
  margin: auto 8px auto 8px;
`

const BottomSliderArea = styled.div`
  flex: 1 0 auto;
  margin: 0.7em 1em auto 1em;
`

const LightSlider = props =>
  <Slider
    min={0}
    max={100}
    step={1}
    value={props.value}
    railStyle={{backgroundColor: '#7f8c8d'}}
    trackStyle={{backgroundColor: '#f1c40f'}}
    handleStyle={{
      borderColor: '#f1c40f',
      backgroundColor: '#34495e',
      height: '1.2em',
      width: '1.2em',
      marginLeft: '-0.5em',
      marginTop: '-0.5em'
    }}
    onChange={props.onChange}
    {...props}
  />

export default connect({
  value: state`dev.${props`devID`}.level`,
  dragDimControl: signal`dev.selectDimControl`
},
  function LightDimItem ({ label, devID, value, dragDimControl}) {
    const onOffClick = (e, newValue) => {
      e.preventDefault()
      dragDimControl({id: devID, newValue: newValue})
    }
    const sliderChange = (newValue) => {
      dragDimControl({id: devID, newValue: newValue})
    }
    return (
      <Container>
      <TopArea>
        <TopLabel>{label}</TopLabel>
        <TopValue>{value}%</TopValue>
      </TopArea>
      <BottomArea>
        <BottomIcon >
          <FaCircleO onClick={e => onOffClick(e,0)} />
        </BottomIcon>
        <BottomSliderArea>
          <LightSlider value={parseInt(value,10)} onChange={sliderChange} />
        </BottomSliderArea>
        <BottomIcon>
          <FaCircle onClick={e => onOffClick(e,100)} />
        </BottomIcon>
      </BottomArea>
    </Container>
  )}
)