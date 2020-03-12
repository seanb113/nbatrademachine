import React, { Component } from 'react'
import TeamList from '../components/TeamList'
import TradeCard from '../components/TradeCard'
import RosterCard from '../components/RosterCard'
class MachineCard extends React.Component {
    state = {
        team1: null,
        team2: null,
        team3: null,
        team4: null,
        all_teams: [],
        team1Players: [],
        team2Players: [],
        team3Players: [],
        team4Players: [],
        whereTo: null,
        tradedFrom: null,
    }

    componentDidMount(){
        this.setState({
        team1: "selecting",
        team2: "selecting",
        all_teams: this.props.teams
        }
        )
    }

    chooseTeam1 = (team) => {
        let old_team = this.state.team1
        let teams_array = this.state.all_teams.map(team=> team === old_team ? null : team)
    this.setState({
        team1: team,
        teams: teams_array
    })
    }
    chooseTeam2 = (team) => {
        let old_team = this.state.team2
        let teams_array = this.state.all_teams.map(team=> team === old_team ? null : team)
    this.setState({
        team2: team,
        teams: teams_array
    })
    }
    chooseTeam3 = (team) => {
        let old_team = this.state.team3
        let teams_array = this.state.all_teams.map(team=> team === old_team ? null : team)
    this.setState({
        team3: team,
        teams: teams_array
    })
    }
    chooseTeam4 = (team) => {
        let old_team = this.state.team4
        let teams_array = this.state.all_teams.map(team=> team === old_team ? null : team)
    this.setState({
        team4: team,
        teams: teams_array
    })
    }
    changeTeam1 = (team) => {
        let old_team = this.state.team1
        let teams_array = this.state.all_teams.push(old_team)
        this.setState({
            team1: "selecting",
            teams: teams_array
        })
    }
        changeTeam2 = (team) => {
        let old_team = this.state.team2
        let teams_array = this.state.all_teams.push(old_team)
        this.setState({
            team1: "selecting",
            teams: teams_array
        })
    }
        changeTeam3 = (team) => {
        let old_team = this.state.team3
        let teams_array = this.state.all_teams.push(old_team)
        this.setState({
            team1: "selecting",
            teams: teams_array
        })
    }
        changeTeam1 = (team) => {
        let old_team = this.state.team4
        let teams_array = this.state.all_teams.push(old_team)
        this.setState({
            team1: "selecting",
            teams: teams_array
        })
    }
        removeTeam1 = (team) => {
            let new_team1 = this.state.team2
            let new_team2 = this.state.team3
            let new_team3 = this.state.team4
            if (this.state.team3 === null)
            alert("You must have at least 2 teams to trade")
            else
            this.setState({
                team1: new_team1,
                team2: new_team2,
                team3: new_team3,
                team4: null
            })
        }
        removeTeam2 = (team) => {
            let new_team2 = this.state.team3
            let new_team3 = this.state.team4
            if (this.state.team3 === null)
            alert("You must have at least 2 teams to trade")
            else
            this.setState({
                team2: new_team2,
                team3: new_team3,
                team4: null
            })
        }
        removeTeam3 = (team) => {
            let new_team3 = this.state.team4
            this.setState({
                team3: new_team3,
                team4: null
            })
        }
        removeTeam4 = (team) => {
            this.setState({
                team4: null
            })
        }

        // addPlayerToTrade = (player, team) => {
        // player.team === team1.name && !team3 ? new_roster = this.state.team2Players.push(player)
        // :
        // player.team === team2.name && !team3 ? new_roster = this.state.team1Players.push(player)
        // :
        // console.log(player, team)
        // }
        

        // removePlayerFromTrade = (player) => {
        //     console.log(player, team)
        // }


    render(){
        return(
            <div>
            <TradeCard team1={this.state.team1} team2={this.state.team2} team3={this.state.team3} team4={this.state.team4} player1={this.state.team1Players} player2={this.state.team2Players} player3={this.state.team3Players} player4={this.state.team4Players} selectPlayer={this.removePlayerFromTrade}/>,
            {this.state.team1 === "selecting" ? <TeamList team={this.state.team1} chooseTeam={this.chooseTeam1} changeTeam={this.changeTeam1} removeTeam={this.removeTeam1}/>: null}
            {this.state.team2 === "selecting" ? <TeamList team={this.state.team2} chooseTeam={this.chooseTeam2} changeTeam={this.changeTeam2} removeTeam={this.removeTeam2}/>: null}
            {this.state.team3 === "selecting" ? <TeamList team={this.state.team3} chooseTeam={this.chooseTeam3} changeTeam={this.changeTeam3} removeTeam={this.removeTeam3}/>: null}
            {this.state.team4 === "selecting" ? <TeamList team={this.state.team4} chooseTeam={this.chooseTeam4} changeTeam={this.changeTeam4} removeTeam={this.removeTeam4}/>: null}
            {this.state.team1 !== "selecting" && this.state.team1 ? <RosterCard team={this.state.team1} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team2 !== "selecting" && this.state.team2 ? <RosterCard team={this.state.team2} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team3 !== "selecting" && this.state.team3 ? <RosterCard team={this.state.team3} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team4 !== "selecting" && this.state.team4 ? <RosterCard team={this.state.team4} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team3 === null ? <button>Add third team</button> : null}
            {this.state.team3 === null ? <button>Add fourth team</button> : null}
            </div>
        )
    }
}
export default MachineCard