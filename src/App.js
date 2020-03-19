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
    votes: [],
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
    fetch("http://localhost:5000/votes")
    .then(r=>r.json())
    .then(votes=>this.setState({
      votes
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

  addVote = (vote)=>{
    this.state.votes.push(vote)
    this.setState({
      votes: this.state.votes
    })
  }

  removeTrade =(id)=>{
    // this.state.trades.filter(t => t.id !== id)
    this.setState({
      trades: this.state.trades.filter(t => t.id !== id)
    })
  }


  render(){
    let currentUserArray = new Array(this.state.currentUser)
  return (
    <div>
    <Switch>
    <Route path="/user/:id" render={(props) => {
      // debugger
           let id = parseInt(props.match.params.id)
              return <UserProfile
              addVote={this.addVote} votes={this.state.votes} user={this.state.users.filter(u=> u.id === id)} trades={this.state.trades.filter(t => t.user_id === id)} all_users={this.state.users} all_teams={this.state.teams} all_players={this.state.players}/>
            }} />
    <Route exact path="/profile" render={() => {
      return this.state.currentUser ? <UserProfile removeTrade={this.removeTrade} votes={this.state.votes} currentUser={this.state.currentUser} user={currentUserArray} trades={this.state.trades.filter(t => t.user_id === this.state.currentUser.id)} all_users={this.state.users} user={currentUserArray} all_teams={this.state.teams} all_players={this.state.players}/> : <Redirect to="/login"/>}}/>
    <Route exact path="/" render={() => {
    return this.state.currentUser ? <Redirect to="/wannatrade"/> : <LoginForm loginSubmit={this.loginSubmit}/>}}/>
    <Route exact path="/wannatrade" render={() => <FireUpMachine lookAtTrades={this.lookAtTrades} all_users={this.state.users} trades={this.state.trades} all_players={this.state.players} all_teams={this.state.teams}/>}/>
    <Route exact path="/machine" render={()=> 
    <MachineCard addedNewTrade ={this.addedNewTrade} players={this.state.players} teams={this.state.teams} notValid={this.state.notValid} currentUser={this.state.currentUser}/>}/>
    <Route exact path="/trades" render={()=>
    <TradeList removeTrade={this.removeTrade} addVote={this.addVote} votes={this.state.votes} currentUser={this.state.currentUser} all_users={this.state.users} trades={this.state.trades} all_players={this.state.players} all_teams={this.state.teams}/>}/>
    <Route exact path="/login" render={() => {
    return this.state.currentUser ? <Redirect to="/wannatrade"/> : <LoginForm loginSubmit={this.loginSubmit}/>}}/>
    </Switch>
    </div>
  )
  }
}

export default App;
