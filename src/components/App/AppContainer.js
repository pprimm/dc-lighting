import React from 'react'
import styled from 'styled-components'


const AppContainer = styled.div`
  background-color: ${({theme}) => theme.darkBG};
  width: 100%;
  height: 100%;
  padding: 3em 0 0 0;
  left: 0;
  text-align: center;
`

export default AppContainer