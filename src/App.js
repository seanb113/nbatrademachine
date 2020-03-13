import React, { Component } from 'react'
import NavBar from './components/NavBar'
import PlayerCard from './components/PlayerCard'
import RosterCard from './components/RosterCard'
import TradeCard from './components/TradeCard'
import TradeList from './components/TradeList'
import UserProfile from './components/UserProfile'
import MachineCard from './components/MachineCard'
import TeamList from './components/TeamList'
// import RosterList from './components/RosterList'

class App extends Component {
  state = {
    players: [],
    teams: [],
    trades: [],
    trading: false
  }

  componentDidMount(){
    fetch("http://localhost:5000/players")
    .then(r=>r.json())
    .then(players=>this.setState({
      players
    }))
    fetch("http://localhost:5000/teams")
    .then(r=>r.json())
    .then(teams=>this.setState({
      teams
    }))
    // fetch("http://localhost:5000/trades")
    // .then(r=>r.json())
    // .then(trades=>this.setState({
    //   trades
    // }))
  }

  fireUpTradeMachine = ()=>{
    // debugger
    this.setState({
      trading: true}
    )
  }

  changeTeam = ()=>{
    console.log("check")
  }

  render(){
  return (
    <div>
    {this.state.trading === true ? <MachineCard players={this.state.players} teams={this.state.teams}/> : <button onClick={this.fireUpTradeMachine}>Ready to trade?</button>}
    {/* <TradeCard/>,
    <PlayerCard/>, */}
    {/* // <TeamList teams={this.state.teams} players={this.state.players} changeTeam={this.changeTeam}/>
    // <RosterCard players={this.state.players}/> */}
    </div>

  )
  }
}

export default App;
