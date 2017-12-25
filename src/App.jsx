import React, { Component } from 'react'

import AllProfiles from './partials/AllProfiles'
import Header from './partials/Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      last30DaysStat: [],
      allTimeStat: [],
      activeView: false
    }
  }

  componentWillMount() {
    // fetch from servers before start rendering
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent', {mode: 'cors'})
    .then(res => res.json())
    .then(data => this.setState({last30DaysStat: data}))
    .catch(err => console.error(err))
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', {mode: 'cors'})
    .then(resp => resp.json())
    .then(data => this.setState({allTimeStat: data}))
    .catch(err => console.error(err))
  }

  onToggle(e) {
    this.setState( (prevState, state) => {
      return { activeView: !prevState.activeView }
    })
  }

  render() {
    return (
      <div className='app_wrapper'>
        <Header checked={this.state.activeView} onchange={this.onToggle.bind(this)} />
        { this.state.activeView
        ? <AllProfiles users={ this.state.allTimeStat } />
        : <AllProfiles users={ this.state.last30DaysStat } />
        }
      </div>
    )
  }
}

export default App;
