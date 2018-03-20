import React from 'react'
import styled from 'styled-components'
import FaCircleO from 'react-icons/lib/fa/circle-o'
import FaCircle from 'react-icons/lib/fa/circle'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

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
  margin: 11px 8px auto 8px;
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
    {...props}
  />

const LightDimItem = ( { label, value } ) =>
  <Container>
    <TopArea>
      <TopLabel>{label}</TopLabel>
      <TopValue>{value}%</TopValue>
    </TopArea>
    <BottomArea>
      <BottomIcon>
        <FaCircleO />
      </BottomIcon>
      <BottomSliderArea>
        <LightSlider value={value}/>
      </BottomSliderArea>
      <BottomIcon>
        <FaCircle />
      </BottomIcon>
    </BottomArea>
  </Container>

export default LightDimItem