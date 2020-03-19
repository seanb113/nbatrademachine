import React, { Component } from 'react'
import TradeCard from '../components/TradeCard'
import {Link} from 'react-router-dom'
class TradeList extends React.Component {
    // state = {
    //     trades: []
    // }
    debugIt = (t, i) =>{
        console.log(t, i)
        let x = this.props
        debugger
    }

    parsedTeams = () => {
       let teams = this.props["trades"].map(t => t.swaps.map(s=> s.team_id).filter)
    }

    // var groupToPlayers = (swapped) => {
    //     swapped.map(swap => swap.reduce(function (obj, item) {
    //     obj[item.team_id] = obj[item.team_id] || [];
    //     obj[item.team_id].push(item.player_id);
    //     return obj;
    // }, {}))}

    findTeam = (id) => {
        debugger
        let teamid = parseInt(id)
        this.props.all_teams.filter(team => team.id === teamid)
    }

    findPlayer = (id) => {
        debugger
        let playerid = parseInt(id)
        this.props.all_players.filter(player => player.id === playerid)
    }
    findUser = (userid) => {
        // debugger
        this.props.all_users.filter(u => u.id === userid)
    }

    render(){
        // let teams = this.groupToPlayers(swaps)
        // debugger
        const swapped = this.props.trades.map(t => t.swaps)
        let tradeUsers = this.props.trades.map(t => t.user_id)
        let tradeIds = this.props.trades.map(t => t) 
        // const dswapped = swapped.slice(1, 100)
        var groupToPlayers = swapped.map(swap => swap.reduce(function (obj, item) {
        obj[item.team_id] = obj[item.team_id] || [];
        obj[item.team_id].push(item.player_id);
        return obj;
            }, {}))
            return(
            <div>
            <br/>
            <div className="ui four column grid">
        <Link to="/machine">Make a new Trade</Link>
            {/* <button onClick={groupToPlayers.map((t, i) => this.debugIt(t, i))}></button> */}
        {groupToPlayers.map((t, i) => Object.keys(t).length === 2 ?
        <TradeCard all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser} trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team3={null} player3={[]} team4={null} player4={[]}/>
        :
        Object.keys(t).length === 3 ? 
        <TradeCard all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser}  trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team3={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[2]))[0]} player3={t[Object.keys(t)[2]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team4={null} player4={[]}/>
        :
        <TradeCard all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser} trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team3={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[2]))[0]} player3={t[Object.keys(t)[2]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team4={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[3]))[0]} player4={t[Object.keys(t)[3]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}/>
        )}
        </div>
        </div>
        )
    }
}
export default TradeList