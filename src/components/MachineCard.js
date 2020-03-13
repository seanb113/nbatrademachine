import React, { Component } from 'react'
import TeamList from '../components/TeamList'
import TradeCard from '../components/TradeCard'
import RosterCard from '../components/RosterCard'
class MachineCard extends Component {
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
        tradedto1: [],
        tradedto2: [],
        tradedto3: [],
        tradedto4: [],
        whereTo: null,
        beingTraded: null,
        submitted: false
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
        // debugger
        // let old_team = this.state.team1
        let teams_array = this.state.all_teams.filter(checkedteam=> checkedteam !== team)
        let teamPlayers = this.props.players.filter(player =>
        player.team_id === team.id)
    this.setState({
        team1: team,
        all_teams: teams_array,
        team1Players: teamPlayers
    })
    }
    chooseTeam2 = (team) => {
        let teams_array = this.state.all_teams.filter(checkedteam=> checkedteam !== team)
        let teamPlayers = this.props.players.filter(player =>
        player.team_id === team.id)
    this.setState({
        team2: team,
        all_teams: teams_array,
        team2Players: teamPlayers
    })
    }
    chooseTeam3 = (team) => {
        let teams_array = this.state.all_teams.filter(checkedteam=> checkedteam !== team)
        let teamPlayers = this.props.players.filter(player =>
        player.team_id === team.id)
    this.setState({
        team3: team,
        all_teams: teams_array,
        team3Players: teamPlayers
    })
    }
    chooseTeam4 = (team) => {
        let teams_array = this.state.all_teams.filter(checkedteam=> checkedteam !== team)
        let teamPlayers = this.props.players.filter(player =>
        player.team_id === team.id) 
    this.setState({
        team4: team,
        all_teams: teams_array,
        team4Players: teamPlayers
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
        removeTeam1 = () => {
            let new_team1 = this.state.team3 === null ? "selecting" : this.state.team2
            let new_team2 = this.state.team3
            let new_team3 = this.state.team4
            let new_roster1 = this.state.team2Players.length > 0 ? this.state.team2Players : []
            let new_roster2 = this.state.team3Players.length > 0 ? this.state.team3Players : []
            let new_roster3 = this.state.team4Players.length > 0 ? this.state.team4Players : []
            let new_traded1 = this.state.tradedto2.length > 0 ? this.state.tradedto2.filter(player => player.team_id !== this.state.team1.id) : []
            let new_traded2 = this.state.tradedto3.length > 0 ? this.state.tradedto3.filter(player => player.team_id !== this.state.team2.id) : []
            let new_traded3 = this.state.tradedto4.length > 0 ? this.state.tradedto4.filter(player => player.team_id !== this.state.team3.id) : []
            // let new_traded1 = this.state.tradedto2.length > 0 ? this.state.tradedto2 : []
            // let new_traded2 = this.state.tradedto3.length > 0 ? this.state.tradedto3 : []
            // let new_traded3 = this.state.tradedto4.length > 0 ? this.state.tradedto4 : []
            this.setState({
                team1: new_team1,
                team2: new_team2,
                team3: new_team3,
                team1Players: new_roster1,
                team2Players: new_roster2,
                team3Players: new_roster3,
                team4: null,
                tradedto1: new_traded1,
                tradedto2: new_traded2,
                tradedto3: new_traded3,
                tradedto4: [],

                beingTraded: null

            })
        }
        removeTeam2 = () => {
            let new_team2 = this.state.team3 === null ? "selecting" : this.state.team3
            let new_team3 = this.state.team4
            let new_traded1 = this.state.tradedto1.length > 0 ? this.state.tradedto1.filter(player => player.team_id !== this.state.team2.id) : []
            let new_traded2 = this.state.tradedto3.length > 0 ? this.state.tradedto3.filter(player => player.team_id !== this.state.team2.id) : []
            let new_traded3 = this.state.tradedto4.length > 0 ? this.state.tradedto4.filter(player => player.team_id !== this.state.team2.id) : []
            let new_roster2 = this.state.team3Players.length > 0 ? this.state.team3Players : []
            let new_roster3 = this.state.team4Players.length > 0 ? this.state.team4Players : []
            this.setState({
                team2: new_team2,
                team3: new_team3,
                team2Players: new_roster2,
                team3Players: new_roster3,
                team4Players: [],
                team4: null,
                tradedto1: new_traded1,
                tradedto2: new_traded2,
                tradedto3: new_traded3,
                tradedto4: [],
                beingTraded: null
            })
        }
        removeTeam3 = () => {
            let new_team3 = this.state.team4
            let new_traded1 = this.state.tradedto1.length > 0 ? this.state.tradedto1.filter(player => player.team_id !== this.state.team3.id) : []
            let new_traded2 = this.state.tradedto2.length > 0 ? this.state.tradedto2.filter(player => player.team_id !== this.state.team3.id) : []
            let new_traded3 = this.state.tradedto4.length > 0 ? this.state.tradedto4.filter(player => player.team_id !== this.state.team3.id) : []
            let new_roster3 = this.state.team4Players.length > 0 ? this.state.team4Players : []
            this.setState({
                team3: new_team3,
                team4: null,
                team3Players: new_roster3,
                tradedto1: new_traded1,
                tradedto2: new_traded2,
                tradedto3: new_traded3,
                tradedto4: [],
                beingTraded: null
            })
        }
        removeTeam4 = (team) => {
            let new_traded1 = this.state.tradedto1.length > 0 ? this.state.tradedto1.filter(player => player.team_id !== this.state.team4.id) : []
            let new_traded2 = this.state.tradedto2.length > 0 ? this.state.tradedto2.filter(player => player.team_id !== this.state.team4.id) : []
            let new_traded3 = this.state.tradedto3.length > 0 ? this.state.tradedto3.filter(player => player.team_id !== this.state.team4.id) : []
            this.setState({
                team4: null,
                team4Players: [],
                tradedto1: new_traded1,
                tradedto2: new_traded2,
                tradedto3: new_traded3,
                tradedto4: [],
                beingTraded: null
            })
        }

        addPlayerToTrade = (player, event) => {
            // debugger
            // event.preventDefault()
            this.setState({
                beingTraded: player,
                whereTo: true
            })
        }

        tradetoTeam1 = () => {
            debugger
            let oldArray = this.state.tradedto1
            let playerObj = this.state.beingTraded
            oldArray.push(playerObj)
            this.setState({
                tradedto1: oldArray,
                beingTraded: null
            })
        }

        tradetoTeam2 = () => {
            let oldArray = this.state.tradedto2
            let playerObj = this.state.beingTraded
            oldArray.push(playerObj)
            this.setState({
                tradedto2: oldArray,
                beingTraded: null
            })
        }


        tradetoTeam3 = () => {
            let oldArray = this.state.tradedto3
            let playerObj = this.state.beingTraded
            oldArray.push(playerObj)
            this.setState({
                tradedto3: oldArray,
                beingTraded: null
            })
        }

        tradetoTeam4 = (arr) => {
            let playerObj = this.state.beingTraded
            let oldArray = this.state.tradedto4
            oldArray.push(playerObj)
            this.setState({
                tradedto4: oldArray,
                beingTraded: null
            })
        }

        donttradetoTeam1 = (playerObj) => {
            debugger
            let oldArray = this.state.tradedto1
            let newArray = oldArray.filter(player => player !== playerObj)
            this.setState({
                tradedto1: newArray
            })
        }

        donttradetoTeam2 = (playerObj) => {
            let oldArray = this.state.tradedto2
            let newArray = oldArray.filter(player => player !== playerObj)
            oldArray.push(playerObj)
            this.setState({
                tradedto2: newArray
            })
        }


        donttradetoTeam3 = (playerObj) => {
            let oldArray = this.state.tradedto3
            let newArray = oldArray.filter(player => player !== playerObj)
            oldArray.push(playerObj)
            this.setState({
                tradedto3: newArray
            })
        }

        donttradetoTeam4 = (playerObj) => {
            let oldArray = this.state.tradedto4
            let newArray = oldArray.filter(player => player !== playerObj)
            oldArray.push(playerObj)
            this.setState({
                tradedto4: newArray
            })
        }


        // pickaTeam = (e) => {
        //     debugger
        // let new1Array = this.state.tradedto1.push(this.state.beingTraded)
        // let new2Array = this.state.tradedto2.push(this.state.beingTraded)
        // let new3Array = this.state.tradedto3.push(this.state.beingTraded)
        // let new4Array = this.state.tradedto4.push(this.state.beingTraded)
        //   if (e.target.innerText.includes(this.state.team1)){
        //     this.setState({
        //         tradedto1: new1Array,
        //         beingTraded: false
        //     })}
        //     else if (e.target.innerText.includes(this.state.team2)){
        //     this.setState({
        //         tradedto2: new2Array,
        //         beingTraded: false
        //     })}
        //     else if (e.target.innerText.includes(this.state.team3)){
        //     this.setState({
        //         tradedto3: new3Array,
        //         beingTraded: false
        //     })}
        //     else if (e.target.innerText.includes(this.state.team4)){
        //     this.setState({
        //         tradedto4: new4Array,
        //         beingTraded: false
        //     })}


        // }

        // whatabout2 = (e) => {
        //     let newArray = this.state.tradedto2.push(this.state.beingTraded)
        //     !e.target.innerText.includes(this.state.team2))
        //     return (
        //     this.whatabout3(e))
        //     else
        //     return (
        //     this.setState({
        //         tradedto2: newArray,
        //         beingTraded: false
        //     }))
        // }

        // whatabout3 = (e) => {
        //     let newArray = this.state.tradedto3.push(this.state.beingTraded)
        //     if (!e.target.innerText.includes(this.state.team3))
        //     return (
        //     this.fineits4(e))
        //     else 
        //     return (
        //     this.setState({
        //         tradedto3: newArray,
        //         beingTraded: false
        //     }))
        // }

        // fineits4 = (e) => {
        //     let newArray = this.state.tradedto4.push(this.state.beingTraded)
        //     this.setState({
        //         tradedto3: newArray,
        //         beingTraded: false
        //     })
        // }

        // swapTeams = (player) => {
        //     debugger
        //     // if (player.team_id === this.state.team1.id) 
        //     let old1 = this.state.tradedto1
        //     let old2 = this.state.tradedto2
        //     const newArray1 = old1.push(player)
        //     const newArray2 = old2.push(player)
        //     // let newArray3 = this.state.tradedto2.push(player)
        //     // let newArray4 = this.state.tradedto2.push(player)
        //     this.setState({
        //         tradedto1: player.team_id === this.state.team1.id ? old1 : newArray1,
        //         tradedto2: player.tead_id === this.state.team2.id ? old2 : newArray2
        //     })
        //     }

        // pickaTeam = (e) => {
        //     const player = this.state.trading
        //     const teamName = e.target.innertext
        //     let old1 = this.state.tradedto1
        //     let old2 = this.state.tradedto2
        //     let old3 = this.state.tradedto3
        //     let old4 = this.state.tradedto4
        //     const newArray1 = old1.push(player)
        //     const newArray2 = old2.push(player)
        //     const newArray3 = old3.push(player)
        //     const newArray4 = old4.push(player)
        //     this.setState({
        //         tradedto1: this.state.team1.name === teamName ? newArray1 : old1,
        //         tradedto2: this.state.team2.name === teamName ? newArray2 : old2,
        //         tradedto3: this.state.team3.name === teamName ? newArray3 : old3,
        //         tradedto4: this.state.team4.name === teamName ? newArray4 : old4,
        //         whereTo: false,
        //         trading: null
        //     })
        //     }

        addAThird = () => {
            this.setState({
                team3: "selecting"
            })
        }

        addAFourth = () => {
            this.setState({
                team4: "selecting"
            })
        }

        handleSubmit = () => {
            this.setState({
                submitted: true
            })
        }


    render(){
        return(
            <div>
            {this.state.beingTraded && this.state.team2 && this.state.beingTraded.team_id !== this.state.team1.id ? <button onClick={(e)=> this.tradetoTeam1(e)}>Trade {this.state.beingTraded.name} to the {this.state.team1.name}?</button> : null}
            {this.state.beingTraded && this.state.team1 && this.state.beingTraded.team_id !== this.state.team2.id ? <button onClick={(e)=> this.tradetoTeam2(e)}>Trade {this.state.beingTraded.name} to the {this.state.team2.name}?</button> : null}
            {this.state.beingTraded && this.state.team3 && this.state.beingTraded.team_id !== this.state.team3.id ? <button onClick={(e)=> this.tradetoTeam3(e)}>Trade {this.state.beingTraded.name} to the {this.state.team3.name}?</button> : null}
            {this.state.beingTraded && this.state.team4 && this.state.beingTraded.team_id !== this.state.team4.id ? <button onClick={(e)=> this.tradetoTeam4(e)}>Trade {this.state.beingTraded.name} to the {this.state.team4.name}?</button> : null}
            <TradeCard team1={this.state.team1} team2={this.state.team2} team3={this.state.team3} team4={this.state.team4} player1={this.state.tradedto1} player2={this.state.tradedto2} player3={this.state.tradedto3} player4={this.state.tradedto4} dontrade1={this.donttradetoTeam1} dontrade2={this.donttradetoTeam2} dontrade2={this.donttradetoTeam3} dontrade2={this.donttradetoTeam4}/>
            {this.state.team1 !== "selecting" && this.state.team1 !== null && this.state.submitted !== true ? <RosterCard team={this.state.team1} players={this.state.team1Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team1 !== "selecting" ? <button onClick={this.removeTeam1}>Remove Team</button> : null}
            {this.state.team2 !== "selecting" && this.state.team2 !== null && this.state.submitted !== true ? <RosterCard team={this.state.team2} players={this.state.team2Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team2 !== "selecting" ? <button onClick={this.removeTeam2}>>Remove Team</button> : null}
            {this.state.team3 !== "selecting" && this.state.team3 !== null && this.state.submitted !== true ? <RosterCard team={this.state.team3} players={this.state.team3Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team3 !== null ? <button onClick={this.removeTeam3}>>Remove Team</button> : null}
            {this.state.team4 !== "selecting" && this.state.team4 !== null && this.state.submitted !== true ? <RosterCard team={this.state.team4} players={this.state.team4Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {this.state.team4 !== null ? <button onClick={this.removeTeam4}>>Remove Team</button> : null}
            {this.state.team1 === "selecting" ? <TeamList teams={this.state.all_teams} chooseTeam={this.chooseTeam1} changeTeam={this.changeTeam1} removeTeam={this.removeTeam1}/>: null}
            {this.state.team2 === "selecting" ? <TeamList teams={this.state.all_teams} chooseTeam={this.chooseTeam2} changeTeam={this.changeTeam2} removeTeam={this.removeTeam2}/>: null}
            {this.state.team3 === "selecting" ? <TeamList teams={this.state.all_teams} chooseTeam={this.chooseTeam3} changeTeam={this.changeTeam3} removeTeam={this.removeTeam3}/>: null}
            {this.state.team4 === "selecting" ? <TeamList teams={this.state.all_teams} chooseTeam={this.chooseTeam4} changeTeam={this.changeTeam4} removeTeam={this.removeTeam4}/>: null}
            {this.state.team3 === null ? <button onClick={this.addAThird}>Add third team</button> : null}
            {this.state.team4 === null && this.state.team3 ? <button onClick={this.addAFourth}>Add fourth team</button> : null}
            {this.state.submitted === false ? <button onClick={this.handleSubmit}>Submit Trade</button> : null}
            </div>
        )
    }
}
export default MachineCard