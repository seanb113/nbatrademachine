import React, { Component } from 'react'
import TradeCard from '../components/TradeCard'
class TradeList extends React.Component {
    // state = {
    //     trades: []
    // }
    debugIt = (t) =>{
        console.log(t)
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
        let teamid = parseInt(id)
        this.props.all_teams.filter(team => team.id === teamid)
    }

    findPlayer = (id) => {
        let playerid = parseInt(id)
        this.props.all_players.filter(player => player.id === playerid)
    }

    render(){
        // let teams = this.groupToPlayers(swaps)
        const swapped = this.props.trades.map(t => t.swaps)
        const dswapped = swapped.slice(1, 100)
        var groupToPlayers = dswapped.map(swap => swap.reduce(function (obj, item) {
        obj[item.team_id] = obj[item.team_id] || [];
        obj[item.team_id].push(item.player_id);
        return obj;
            }, {}))
            return(
            <div>
            <button onClick={groupToPlayers.map(t => this.debugIt(t))}></button>
        {groupToPlayers.map(t => Object.keys(t).length === 2 ?
        <TradeCard team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p))[0]}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p))[0]} team3={null} player3={[]} team4={null} player4={[]}/>
        :
        Object.keys(t).length === 3 ? 
        <TradeCard team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p))[0]}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p))[0]} team3={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[2]))[0]} player3={t[Object.keys(t)[2]].map(p=> this.props.all_players.filter(player => player.id === p))[0]} team4={null} player4={[]}/>
        :
        <TradeCard team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p))[0]}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p))[0]}
        team3={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[2]))[0]} player3={t[Object.keys(t)[2]].map(p=> this.props.all_players.filter(player => player.id === p))[0]}
        team4={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[3]))[0]} player4={t[Object.keys(t)[3]].map(p=> this.props.all_players.filter(player => player.id === p))[0]}/>
        )}
        </div>
        )
    }
}
export default TradeList