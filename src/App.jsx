import React, { Component } from 'react'
import styled from 'styled-components'

import ProfileCard from './partials/ProfileCard'
import Header from './partials/Header'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <ProfileCard />
      </Wrapper>
    )
  }
}

export default App;
