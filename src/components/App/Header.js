import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  position: fixed;
  background-color: ${({theme}) => theme.darkBG};
  opacity: 1.0;
  color: ${({theme}) => theme.lightText};
  margin: 0px;
  display: flex;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 3em;
`

const Title = styled.div`
  text-align: center;
  margin: auto;
  flex: auto;
`

const Header = ( { title }) =>
  <HeaderContainer>
    <Title>{title}</Title>
  </HeaderContainer>

  export default Header