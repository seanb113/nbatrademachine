import React, { Component } from 'react'
import NavBar from './components/NavBar'
import PlayerCard from './components/PlayerCard'
import RosterCard from './components/RosterCard'
import TradeCard from './components/TradeCard'
import TradeList from './components/TradeList'
import UserProfile from './components/UserProfile'
import MachineCard from './components/MachineCard'
import TeamList from './components/TeamList'
import LoginForm from './components/LoginForm'
import FireUpMachine from './components/FireUpMachine'
import {Route, Switch, Redirect} from 'react-router-dom'
// import RosterList from './components/RosterList'

class App extends Component {
  state = {
    players: [],
    teams: [],
    trades: [],
    trading: true,
    look_at_trades: false,
    currentUser: null,
    notValid: false
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
    fetch("http://localhost:5000/trades")
    .then(r=>r.json())
    .then(trades=>this.setState({
      trades
    }))
    .catch((error) => {
    alert(error)
    })
  }

  loginSubmit = (user) =>{
    // debugger
    this.setState({
      currentUser: user
    })
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

  lookAtTrades = ()=>{
    this.setState({
      look_at_trades: true
    })
  }

  render(){
  return (
    <div>
    <Switch>
    <Route path="/" render={() => {
    return this.state.currentUser ? <Redirect to="/wannatrade"/> : <LoginForm loginSubmit={this.loginSubmit}/>}}/>
    <Route exact path="/wannatrade" exact component={FireUpMachine}>
    <FireUpMachine lookAtTrades={this.lookAtTrades}/>
    </Route>
    <Route exact path="/machine" render={()=> 
    <MachineCard players={this.state.players} teams={this.state.teams} notValid={this.state.notValid} currentUser={this.state.currentUser}/>}/>
    <Route exact path="trades" render={()=>
    <TradeList trades={this.state.trades} all_players={this.state.players} all_teams={this.state.teams}/>}/>
    <Route exact path="/login" render={() => {
    return this.state.currentUser ? <Redirect to="/wannatrade"/> : <LoginForm loginSubmit={this.loginSubmit}/>}}/>
    </Switch>
    </div>
  )
  }
}

export default App;
