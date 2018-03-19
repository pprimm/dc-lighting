import React from 'react'
import styled from 'styled-components'

const ListHeader = styled.div`
  color: ${({theme}) => theme.lightText};
  background-color: ${({theme}) => theme.lightBG};
  padding: 0.6em 1em 0.6em 1em
`

export default ListHeader