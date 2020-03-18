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
    users: [],
    added: [],
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
    fetch("http://localhost:5000/users")
    .then(r=>r.json())
    .then(users=>this.setState({
      users
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

  addedNewTrade = (trade)=>{
    this.state.trades.push(trade)
    this.setState({
      trades: this.state.trades
    })
  }

  currentUserTrades = ()=>{
    this.state.trades.filter(t => t.user_id === this.state.currentUser.id)
  }


  render(){
    let currentUserArray = new Array(this.state.currentUser)
  return (
    <div>
    <Switch>
    <Route exact path="/profile" render={() => {
      return this.state.currentUser ? <UserProfile trades={this.state.trades.filter(t => t.user_id === this.state.currentUser.id)} all_users={currentUserArray} all_teams={this.state.teams} all_players={this.state.players}/> : <Redirect to="/login"/>}}/>
    <Route exact path="/" render={() => {
    return this.state.currentUser ? <Redirect to="/wannatrade"/> : <LoginForm loginSubmit={this.loginSubmit}/>}}/>
    <Route exact path="/wannatrade" render={routerProps => <FireUpMachine {...routerProps} lookAtTrades={this.lookAtTrades}/>}/>
    <Route exact path="/machine" render={()=> 
    <MachineCard addedNewTrade ={this.addedNewTrade} players={this.state.players} teams={this.state.teams} notValid={this.state.notValid} currentUser={this.state.currentUser}/>}/>
    <Route exact path="/trades" render={()=>
    <TradeList all_users={this.state.users} trades={this.state.trades} all_players={this.state.players} all_teams={this.state.teams}/>}/>
    <Route exact path="/login" render={() => {
    return this.state.currentUser ? <Redirect to="/wannatrade"/> : <LoginForm loginSubmit={this.loginSubmit}/>}}/>
    </Switch>
    </div>
  )
  }
}

export default App;
