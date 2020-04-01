import React, { Component } from 'react'
import TradeCard from '../components/TradeCard'
import {Link, Fragment} from 'react-router-dom'
import Select from "react-dropdown-select"
import { Button, Dropdown, Form, Input } from 'semantic-ui-react'


const options = [
    {
      value: "Atlanta Hawks", text: "Atlanta Hawks"
    },
    {
      value: "Boston Celtics", text: "Boston Celtics"
    },
    {
      value: "Brooklyn Nets", text: "Brooklyn Nets"
    },
    {
      value: "Charlotte Hornets", text: "Charlotte Hornets"
    },
    {
      value: "Chicago Bulls", text: "Chicago Bulls"
    },
    {
      value: "Cleveland Cavaliers", text: "Cleveland Cavaliers"
    },
    {
      value: "Dallas Mavericks", text: "Dallas Mavericks"
    },
    {
        value: "Denver Nuggets", text: "Denver Nuggets"
    },
    {
      value: "Detroit Pistons", text: "Detroit Pistons"
    },
    {
      value: "Golden State Warriors", text: "Golden State Warriors"
    },
    {
      value: "Houston Rockets", text: "Houston Rockets",
    },
    {
      value: "Indiana Pacers", text: "Indiana Pacers"
    },
    {
      value: "Los Angeles Clippers", text: "Los Angeles Clippers"
    },
    {
      value: "Los Angeles Lakers", text: "Los Angeles Lakers"
    },
    {
      value: "Memphis Grizzlies", text: "Memphis Grizzlies"
    },
    {
      value: "Miami Heat", text: "Miami Heat"
    },
    {
      value: "Milwaukee Bucks", text: "Milwaukee Bucks"
    },
    {
      value: "Minnesota Timberwolves", text: "Minnesota Timberwolves"
    },
    {
      value: "New Orleans Pelicans", text: "New Orleans Pelicans"
    },
    {
      value: "New York Knicks", text: "New York Knicks"
    },
    {
      value: "Oklahoma City Thunder", text: "Oklahoma City Thunder"
    },
    {
      value: "Orlando Magic", text: "Orlando Magic"
    },
    {
      value: "Philadelphia 76ers", text: "Philadelphia 76ers" 
    },
    {
      value: "Phoenix Suns", text: "Phoenix Suns"
    },
    {
      value: "Portland Trail Blazers", text: "Portland Trail Blazers"
    },
    {
      value: "Sacramento Kings", text: "Sacramento Kings"
    },
    {
      value: "San Antonio Spurs", text: "San Antonio Spurs"
    },
    {
      value: "Toronto Raptors", text: "Toronto Raptors"
    },
    {
      value: "Utah Jazz", text: "Utah Jazz"
    },
    {
      value: "Washington Wizards", text: "Washington Wizards"}
  ]


class TradeList extends React.Component {
    state = {
        trades: this.props.trades,
        players: this.props.all_players,
        teams: this.props.all_teams,
        value: []
    }

    removeTrade =(id)=>{
        debugger
       let arra = this.state.trades.filter(t => t.id !== id)
    this.setState({
      trades: arra
    })
    this.props.removeTrade(id)
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

    findTeamByName  = (name) => {
        let team = this.state.teams.filter(t => t.name === name)
        return team[0]
    }

    filterTradesByTeams = (array) => {
        //refactor
        let a1 = array.length > 0 ? this.props.trades.map(t=>t.swaps.map(s=> s.team_id).includes(this.findTeamByName(array[0]).id) ?  t : null).filter(t=>t != null).filter(t=>t != null) : null
        let a2 = array.length > 1 ? a1.map(t=>t.swaps.map(s=> s.team_id).includes(this.findTeamByName(array[1]).id) ?  t : null).filter(t=>t != null).filter(t=>t != null) : null
        let a3 = array.length > 2 ? a2.map(t=>t.swaps.map(s=> s.team_id).includes(this.findTeamByName(array[2]).id) ?  t : null).filter(t=>t != null).filter(t=>t != null) : null
        let a4 = array.length > 3 ? a3.map(t=>t.swaps.map(s=> s.team_id).includes(this.findTeamByName(array[3]).id) ?  t : null).filter(t=>t != null).filter(t=>t != null) : null
        if (array.length === 1)
        return a1
        else if (array.length === 2)
        return a2
        else if (array.length === 3)
        return a3
        else if (array.length === 3)
        return a4
        else
        return this.props.trades
    }

    deleteFilter = (event) => {
        let arr2 = this.state.value.filter(t => t !== event.target.parentElement.innerText)
        let teamNames = arr2.length > 0 ? arr2 : []
        this.setState({
            value: arr2,
            trades: this.filterTradesByTeams(teamNames)

        })
    }

    onFilterChange = (event) => {
        let teamName = event.target.innerText
        let arr = teamName !== "" && event.target.className !== "delete icon" ? this.state.value.push(teamName) : this.state.value
        event.target.className === "delete icon"
        ?
        this.deleteFilter(event)
        :
        this.setState({
            value: this.state.value,
            trades: this.filterTradesByTeams(this.state.value)
        })
    }


    render(){
        const swapped = this.state.trades.map(t => t.swaps)
        const tradeUsers = this.state.trades.map(t => t.user_id)
        const tradeIds = this.state.trades.map(t => t) 
        const groupToPlayers = swapped.map(swap => swap.reduce(function (obj, item) {
        obj[item.team_id] = obj[item.team_id] || [];
        obj[item.team_id].push(item.player_id);
        return obj;
            }, {}))
            return(
                <div>
              <Dropdown
                    placeholder='team'
                    fluid
                    multiple
                    search
                    selection
                    options={options}
                    onChange={this.onFilterChange.bind(this)}
                    onEnter={this.handleSubmit}
                />
                <br/>
            <div className="ui cards">
        <br/>
        <br/>
            <br />
        {groupToPlayers.map((t, i) => Object.keys(t).length === 2 ?
        <TradeCard teams={this.props.all_teams} dontrade1={this.selectPlayer} dontrade2={this.selectPlayer} dontrade3={this.selectPlayer} dontrade4={this.selectPlayer} deleteThisTrade={this.removeTrade} all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser} trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team3={null} player3={[]} team4={null} player4={[]}/>
        :
        Object.keys(t).length === 3 ? 
        <TradeCard teams={this.props.all_teams} dontrade1={this.selectPlayer} dontrade2={this.selectPlayer} dontrade3={this.selectPlayer} dontrade4={this.selectPlayer} deleteThisTrade={this.removeTrade} all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser}  trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team3={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[2]))[0]} player3={t[Object.keys(t)[2]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team4={null} player4={[]}/>
        :
        <TradeCard teams={this.props.all_teams} dontrade1={this.selectPlayer} dontrade2={this.selectPlayer} dontrade3={this.selectPlayer} dontrade4={this.selectPlayer} deleteThisTrade={this.removeTrade} all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser} trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
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