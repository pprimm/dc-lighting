// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'

const Divider = styled.div`
  border-top-width: 1px;
  border-bottom-width: 0;
  border-style: solid;
  border-color: ${props => props.theme.lightBG};
`

export default Divider