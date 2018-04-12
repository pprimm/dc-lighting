import styled from 'styled-components'

export default styled.div`
  color: ${props => props.selectedColor ?
    props.selectedColor :
    props.theme.lightText};
  min-width: 2em;
  margin: auto 0.2em;
  text-align: center;
`