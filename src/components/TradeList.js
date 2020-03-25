import React, { Component } from 'react'
import TradeCard from '../components/TradeCard'
import {Link, Fragment} from 'react-router-dom'
import Select from "react-dropdown-select"
import { Button, Dropdown, Form, Input } from 'semantic-ui-react'


const options = [
    {
      label: "Atlanta Hawks", value: "Atlanta Hawks"
    },
    {
      label: "Boston Celtics", value: "Boston Celtics"
    },
    {
      label: "Brooklyn Nets", value: "Brooklyn Nets"
    },
    {
      label: "Charlotte Hornets", value: "Charlotte Hornets"
    },
    {
      label: "Chicago Bulls", value: "Chicago Bulls"
    },
    {
      label: "Cleveland Cavaliers", value: "Cleveland Cavaliers"
    },
    {
      label: "Dallas Mavericks", value: "Dallas Mavericks"
    },
    {
        label: "Denver Nuggets", value: "Denver Nuggets"
    },
    {
      label: "Detroit Pistons", value: "Detroit Pistons"
    },
    {
      label: "Golden State Warriors", value: "Golden State Warriors"
    },
    {
      label: "Houston Rockets", value: "Houston Rockets",
    },
    {
      label: "Indiana Pacers", value: "Indiana Pacers"
    },
    {
      label: "Los Angeles Clippers", value: "Los Angeles Clippers"
    },
    {
      label: "Los Angeles Lakers", value: "Los Angeles Lakers"
    },
    {
      label: "Memphis Grizzlies", value: "Memphis Grizzlies"
    },
    {
      label: "Miami Heat", value: "Miami Heat"
    },
    {
      label: "Milwaukee Bucks", value: "Milwaukee Bucks"
    },
    {
      label: "Minnesota Timberwolves", value: "Minnesota Timberwolves"
    },
    {
      label: "New Orleans Pelicans", value: "New Orleans Pelicans"
    },
    {
      label: "New York Knicks", value: "New York Knicks"
    },
    {
      label: "Oklahoma City Thunder", value: "Oklahoma City Thunder"
    },
    {
      label: "Orlando Magic", value: "Orlando Magic"
    },
    {
      label: "Philadelphia 76ers", value: "Philadelphia 76ers" 
    },
    {
      label: "Phoenix Suns", value: "Phoenix Suns"
    },
    {
      label: "Portland Trail Blazers", value: "Portland Trail Blazers"
    },
    {
      label: "Sacramento Kings", value: "Sacramento Kings"
    },
    {
      label: "San Antonio Spurs", value: "San Antonio Spurs"
    },
    {
      label: "Toronto Raptors", value: "Toronto Raptors"
    },
    {
      label: "Utah Jazz", value: "Utah Jazz"
    },
    {
      label: "Washington Wizards", value: "Washington Wizards"}
  ]


class TradeList extends React.Component {
    state = {
        trades: this.props.trades,
        players: this.props.all_players,
        teams: this.props.all_teams,
        value: [],
        text: ""
    }
    debugIt = (t, i) =>{
        console.log(t, i)
        let x = this.props
        debugger
    }

    selectPlayer(){
        console.log("clicked")
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
        let a1 = array.length > 0 ? this.state.trades.map(t=>t.swaps.map(s=> s.team_id).includes(this.findTeamByName(array[0]).id) ?  t : null).filter(t=>t != null).filter(t=>t != null) : null
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

    onFilterChange = (event) => {
        // debugger
        this.setState({
            value: event
        })
    }

    handleSubmit = (event) => {
        let labels = this.state.value.map(v=>v.label)
        // debugger
        event.preventDefault()
        console.log(event.target)
        this.state.value === []
        ?
        this.setState({
            trades: this.props.trades
        })
        :
        this.setState({
            trades: this.filterTradesByTeams(labels)
        })
    }

    render(){
        // let teams = this.groupToPlayers(swaps)
        // debugger
        const swapped = this.state.trades.map(t => t.swaps)
        let tradeUsers = this.state.trades.map(t => t.user_id)
        let tradeIds = this.state.trades.map(t => t) 
        // let options = this.state.teams.map(t=> t.name)
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
        <br/>
        <br/>
        <div>
        <Link to="/machine">Make a new Trade</Link>
        </div>
        <br />
        <form onSubmit={this.handleSubmit}>
            <label>
                Filter By team
                <Select onChange={this.onFilterChange} value={this.state.value} options={options} name="select" require multi/>
                
                {/* // <option value={"All"}>All</option> 
                // {this.state.teams.map(item => ( */}
                {/* //     <option key={item.id} value={item.name}>
                //     {item.name}
                //     </option>
                // ))} */}
                {console.log(this.state.teams)}
            </label>
            <button>Submit</button>
            </form>
            <br />
        {groupToPlayers.map((t, i) => Object.keys(t).length === 2 ?
        <TradeCard dontrade1={this.selectPlayer} dontrade2={this.selectPlayer} dontrade3={this.selectPlayer} dontrade4={this.selectPlayer} removeTrade={this.props.removeTrade} all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser} trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team3={null} player3={[]} team4={null} player4={[]}/>
        :
        Object.keys(t).length === 3 ? 
        <TradeCard dontrade1={this.selectPlayer} dontrade2={this.selectPlayer} dontrade3={this.selectPlayer} dontrade4={this.selectPlayer} removeTrade={this.props.removeTrade} all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser}  trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
        team2={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[1]))[0]} player2={t[Object.keys(t)[1]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team3={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[2]))[0]} player3={t[Object.keys(t)[2]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)} team4={null} player4={[]}/>
        :
        <TradeCard dontrade1={this.selectPlayer} dontrade2={this.selectPlayer} dontrade3={this.selectPlayer} dontrade4={this.selectPlayer} removeTrade={this.props.removeTrade} all_teams={this.props.all_teams} addVote={this.props.addVote} votes={this.props.votes} currentUser={this.props.currentUser} trade={tradeIds[i]} all_users={this.props.all_users} createdBy={this.props.all_users.filter(u => u.id === tradeUsers[i])} team1={this.props.all_teams.filter(team => team.id === parseInt(Object.keys(t)[0]))[0]} player1={t[Object.keys(t)[0]].map(p=> this.props.all_players.filter(player => player.id === p)).flat(1)}
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