import React from 'react'
import styled from 'styled-components'
import FaCircleO from 'react-icons/lib/fa/circle-o'
import FaCircle from 'react-icons/lib/fa/circle'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: grey;
`

const TopArea = styled.div`
  display: flex;
  flex-direction: row;
`

const BottomArea = styled.div`
  display: flex;
  flex-direction: row;
`

const TopLabel = styled.div`
  flex: 1 0 auto;
`

const TopValue = styled.div`
  flex: 0 1 auto;
`
const BottomIcon = styled.div`
`

const BottomSliderArea = styled.div`
  flex: 1 0 auto;
  background-color: yellow;
`

const LightDimItem = () =>
  <Container>
    <TopArea>
      <TopLabel>Label</TopLabel>
      <TopValue>50%</TopValue>
    </TopArea>
    <BottomArea>
      <BottomIcon>
        <FaCircleO />
      </BottomIcon>
      <BottomSliderArea>
        some text here
      </BottomSliderArea>
      <BottomIcon>
        <FaCircle />
      </BottomIcon>
    </BottomArea>
  </Container>

export default LightDimItem