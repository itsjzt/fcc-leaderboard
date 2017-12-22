import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Heading = styled.h1`
  color: #ff6978;
  font-size: 2.5rem;
  font-weight: 300;
  text-align: center;
  font-family: 'Courgette', cursive;
`

const Small = styled.small`
  font-size: 75%;
`

const Selector = styled.form`
  display: inline-flex;
  justify-content: center;
`
const Radio = styled.input`

`

const Label = styled.label`
  font-size: 90%;
  margin-right: 16px;
`

const Header = (props) => {
  return (
    <Wrapper>
      <Heading>
        FreeCodeCamp's
        <Small> Leader Board </Small>
      </Heading>
      <Selector>
        <Radio id='30Days' type='radio' />
        <Label for='30Days' > Last 30 Days  </Label>
        <Radio id='allTime' type='radio' />
        <Label for='allTime' > All time </Label>
      </Selector>
    </Wrapper>
  )
}

export default Header