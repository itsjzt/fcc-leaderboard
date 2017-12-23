import React, { Component } from 'react'
import styled from 'styled-components'

import ProfileCard from './partials/ProfileCard'
import Header from './partials/Header'

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  /* CSS variables */
  --pink: #ff6978;
  --darkgrey: #454545;
  --lightgrey: #454545;
  --whiteIsh: #f3f5f7;
`

class App extends Component {
  constructor() {
    super()
    this.state = {
      last30DaysStat: {},
      allTimeStat: {}
    }
  }

  componentWillMount() {
    // fetch from servers before start rendering
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent', {mode: 'cors'})
    .then(resp => console.log(resp))
    .catch(err => console.error(err))
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', {mode: 'cors'})
    .then(resp => console.log(resp))
    .catch(err => console.error(err))

  }

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
