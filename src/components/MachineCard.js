import React, { Component } from 'react'
import TeamList from '../components/TeamList'
import TradeCard from '../components/TradeCard'
import RosterCard from '../components/RosterCard'
import {Route, Link} from 'react-router-dom'
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
        beingTradedFrom: null,
        submitted: false,
        saved: false,
        notValid: false
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

        addPlayerToTrade = (player) => {
            // // debugger
            let beingTradedFrom = this.state.all_teams.map(team => team.name === player.team)
            this.setState({
                beingTraded: player,
                whereTo: true,
                beingTradedFrom
            })
        }

        // removeFromRoster = () => {
        //     debugger
        //     let playerDiv = document.getElementById(`${this.state.beingTraded.id}`)
        //     playerDiv.style.opacity = 0
        //     playerDiv.style.filter = "alpha(opacity = 0)"
        //     playerDiv.style.position = 'absolute'
        //     playerDiv.style.top = 0
        //     playerDiv.style.bottom = 0
        //     playerDiv.style.left = 0
        //     playerDiv.style.right = 0
        //     playerDiv.style.display = 'block'
        //     playerDiv.style.zindex = 2
        // }
        // removeFrom2Roster = () => {
        //     return this.state.team2Players.filter(p => p !== this.state.beingTraded)
        // }
        // removeFrom3Roster = () => {
        //     return this.state.team3Players.filter(p => p !== this.state.beingTraded)
        // }
        // removeFrom4Roster = () => {
        //     return this.state.team4Players.filter(p => p !== this.state.beingTraded)
        // }
        // whiteOutDiv  = () => {
        //     `<div opacity: 0; filter: alpha(opacity = 0); position:absolute; top:0; bottom:0; left:0; right:0; display:block; z-index:2; background:transparent;></div>`
        // }

        // removingFromallRosters = () => {
        //     this.setState({
        //         team1Players: this.removeFrom1Roster(),
        //         team2Players: this.removeFrom2Roster(),
        //         team3Players: this.removeFrom3Roster(),
        //         team4Players: this.removeFrom4Roster()
        //     })
        // }

        tradetoTeam1 = () => {
            debugger
            // this.removeFromRoster()
            let oldArray = this.state.tradedto1
            let playerObj = this.state.beingTraded
            oldArray.push(playerObj)
            this.setState({
                tradedto1: oldArray,
                beingTraded: null
            })
        }

        tradetoTeam2 = () => {
            // this.removeFromRoster()
            let oldArray = this.state.tradedto2
            let playerObj = this.state.beingTraded
            oldArray.push(playerObj)
            this.setState({
                tradedto2: oldArray,
                beingTraded: null
            })
        }


        tradetoTeam3 = () => {
            // this.removeFromRoster()
            let oldArray = this.state.tradedto3
            let playerObj = this.state.beingTraded
            oldArray.push(playerObj)
            this.setState({
                tradedto3: oldArray,
                beingTraded: null
            })
        }

        tradetoTeam4 = () => {
            // this.removeFromaRoster()
            let playerObj = this.state.beingTraded
            let oldArray = this.state.tradedto4
            oldArray.push(playerObj)
            this.setState({
                tradedto4: oldArray,
                beingTraded: null
            })
        }

        // returnToRoster1 = (player) => {
        //     if (player.team_id !== this.state.team1.id)
        //     return this.state.team1Players
        //     else
        //     this.state.team1Players.push(player)
        // }
        // returnToRoster2 = (player) => {
        //     // debugger
        //     if (player.team_id !== this.state.team2.id)
        //     return this.state.team2Players
        //     else
        //     this.state.team2Players.push(player)
        // }
        // returnToRoster3 = (player) => {
        //     if (this.state.team3 && player.team_id !== this.state.team3.id)
        //     return this.state.team3Players
        //     else
        //     this.state.team3Players.push(player)
        // }
        // returnToRoster4 = (player) => {
        //     if (this.state.team4 && player.team_id == this.state.team4.id)
        //     return this.state.team4Players
        //     else
        //     this.state.team4Players.push(player)
        // }

        // returningToAllRosters = (player) => {
        //     this.setState({
        //         team1Players: this.returnToRoster1(player),
        //         team2Players: this.returnToRoster2(player),
        //         team3Players: this.returnToRoster3(player),
        //         team4Players: this.returnToRoster4(player)
        //     })
        // }

        donttradetoTeam1 = (playerObj, team, event) => {
            let oldArray = this.state.tradedto1
            let newArray = oldArray.filter(player => player !== playerObj)
            this.setState({
                tradedto1: newArray
            })
            // this.returningToAllRosters(playerObj)
        }

        donttradetoTeam2 = (playerObj, team, event) => {
            debugger
            let oldArray = this.state.tradedto2
            let newArray = oldArray.filter(player => player !== playerObj)
            this.setState({
                tradedto2: newArray
            })
            // this.returningToAllRosters(playerObj)
        }


        donttradetoTeam3 = (playerObj, team, event) => {
            let oldArray = this.state.tradedto3
            let newArray = oldArray.filter(player => player !== playerObj)
            this.setState({
                tradedto3: newArray
            })
            // this.returningToAllRosters(playerObj)
        }

        donttradetoTeam4 = (playerObj, team, event) => {
            let oldArray = this.state.tradedto4
            let newArray = oldArray.filter(player => player !== playerObj)
            this.setState({
                tradedto4: newArray
            })
            // this.returningToAllRosters(playerObj)
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


        tradedAway = (team) => {
            // debugger
            let arr = []
            let arr1 = team !== null ? arr.concat(this.state.tradedto1.filter(player => player.team_id === team.id)) : []
            let arr2 = team !== null ? arr1.concat(this.state.tradedto2.filter(player => player.team_id === team.id)) : []
            let arr3 = team !== null ? arr2.concat(this.state.tradedto3.filter(player => player.team_id === team.id)) : []
            let arr4 = team !== null ? arr3.concat(this.state.tradedto4.filter(player => player.team_id === team.id)) : []
            return arr4
        }


        
        // BigInt.prototype.toJSON = function() { return this.toString()  }
        postTrade = (trade) => {
            let user = this.props.currentUser
            fetch("http://localhost:5000/trades", {
                method: "POST",
                headers: {
                    "Content-Type" :"application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    user: user,
                    swap_attributes: trade
                })
            }).then(r=>r.json())
                .then(r=>console.log(r))
        }

        handleSave = () => {
            let team1Trade = [this.state.team1, this.state.tradedto1]
            let team2Trade = [this.state.team2, this.state.tradedto2]
            let team3Trade = this.state.tradedto3 > 0 ? [this.state.team3, this.state.tradedto3] : null
            let team4Trade = this.state.tradedto4 > 0 ? [this.state.team4, this.state.tradedto4] : null
            this.postTrade([team1Trade, team2Trade, team3Trade ? team3Trade : null, team4Trade ? team4Trade : null])
            this.setState({
                saved: true
            })
        }

        editTrade = () => {
            this.setState({
                submitted: false
            })
        }

        resetMachine = () => {
            this.setState({
                team1: "selecting",
                team2: "selecting",
                team3: null,
                team4: null,
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
            })
        }

//           isUnderCap = (salary) => {
//     return salary < this.props.salaryCap;
//   };

//   isUnderTax = (team) => {
//     return this.salaryOfTeam(team) < this.props.luxuryTax;
//   };

//   salaryToNumber = (salaryString) => {
//     return parseInt(salaryString.replace(/\$|\,/g, ''));
//   };

//   salaryOfTeam = (team) => {
//     return _.reduce(team, (sum, player) => {
//       return sum + this.salaryToNumber(player.salary);
//     }, 0);
//   };

//   potentialSalary = (currentSalary, incomingSalary) => {
//     return currentSalary + incomingSalary;
//   };

//   isTrade = () => {
//     // TODO this can be shorter, refactor
//     let check = false;

//     this.props.incomingPlayers.forEach((teamIncoming) => {
//       if(teamIncoming.length > 0) {
//         check = true;
//       }
//     });

//     return check;
//   };

        oldCap = (team) => {
            team ==! null
            ?
            parseInt(team.cap_spent.replace(/\D/g,''))
            :
            parseInt(0)
        }

        // incomingSalary = (acquired) => {
        //     acquired.map(player => parseInt(player.salary.replace(/\D/g,''))).reduce((a, b) => a + b, 0)
        // }

        // outgoingSalary(team){
        //    this.tradedAway({team}).map(player => parseInt(player.salary.replace(/\D/g,''))).reduce((a, b) => a + b, 0))
        // }

        // newCap = (team) => {
        //     return oldCap(team) + incomingSalaries(team) - outgoingSalaries(team)
        // }
        validateTrade = (team, acquired) => {
            debugger
            // 1. Any team under the cap can take any amount in up to the cap level + $100,000
            // 2. Teams under tax but over cap. It's 150%???????
            // 3. Under 9.8M in incoming: 150+100 else : 125 + 100000
            // 4. Any team can take back up to 125% of their outgoing salaries + $100,000
            let incomingSalary = acquired.map(player => parseInt(player.salary.replace(/\D/g,''))).reduce((a, b) => a + b, 0);
            let outgoingSalary = this.tradedAway(team).map(player => parseInt(player.salary.replace(/\D/g,''))).reduce((a, b) => a + b, 0)
            let salaryCap = 116000000
            let luxuryTax = 139000000
            let potentialSalary = this.oldCap(team) + incomingSalary;
            let underTax = (potentialSalary < luxuryTax);

            // let checkedTeam = (`${team !== null ? team.name : null} taking in too much salary`);

            if(potentialSalary < (salaryCap + 100000)) {
                console.log('Potential salary is less than salary cap + 100,000');
            }
            else if(underTax && incomingSalary < 98000000) {
                if(incomingSalary > (outgoingSalary * 1.5) + 100000) {
                console.log('under tax and incoming more than 150% + 100,000 of outgoing');

                if(incomingSalary > (outgoingSalary * 1.25) + 100000) {

                    return false,
                    this.setState({
                            notValid: team
                        })
                
                }
                }
            }
            else if(incomingSalary > (outgoingSalary * 1.25) + 100000) {
                console.log('incoming is greater than 125% + 100,000 of outgoing');

                return false,
                this.setState({
                    notValid: team
                })
            }

            return true
            }



        handleSubmit = () => {
        let team1 = this.state.team1
        let team2 = this.state.team2
        let team3 = this.state.team3
        let team4 = this.state.team4
        this.validateTrade(team1, this.state.tradedto1) &&
        this.validateTrade(team2, this.state.tradedto2) &&
        this.validateTrade(team3, this.state.tradedto3) &&
        this.validateTrade(team4, this.state.tradedto4) ?
        this.setState({
            submitted: true,
            notValid: false
        }) :
        alert("Your trade was not successful")
            // this.setState({
            //     submitted: true
            // })
        }

    render(){
        let tradeTo = this.state.beingTraded
        let team1 = this.state.team1
        let team2 = this.state.team2
        let team3 = this.state.team3
        let team4 = this.state.team4
        let all_teams = this.state.all_teams
        return(
            <div>
            {tradeTo && team1 !== "selecting" && tradeTo.team_id !== team1.id ? <button onClick={(e)=> this.tradetoTeam1(e)}>Trade {tradeTo.name} to the {team1.name}?</button> : null}
            {tradeTo && team2 !== "selecting" && tradeTo.team_id !== team2.id ? <button onClick={(e)=> this.tradetoTeam2(e)}>Trade {tradeTo.name} to the {team2.name}?</button> : null}
            {tradeTo && team3 && tradeTo.team_id !== team3.id ? <button onClick={(e)=> this.tradetoTeam3(e)}>Trade {tradeTo.name} to the {team3.name}?</button> : null}
            {tradeTo && team4 && tradeTo.team_id !== team4.id ? <button onClick={(e)=> this.tradetoTeam4(e)}>Trade {tradeTo.name} to the {team4.name}?</button> : null}
            <TradeCard tooMuchSalary={this.state.notValid} team1={team1} team2={team2} team3={team3} team4={team4} player1={this.state.tradedto1} player2={this.state.tradedto2} player3={this.state.tradedto3} player4={this.state.tradedto4} dontrade1={this.donttradetoTeam1} dontrade2={this.donttradetoTeam2} dontrade3={this.donttradetoTeam3} dontrade4={this.donttradetoTeam4}/>
            {team1 !== "selecting" && team1 !== null && this.state.submitted !== true ? <RosterCard team={team1} players={this.state.team1Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {team1 !== "selecting" && !this.state.submitted ? <button onClick={this.removeTeam1}>Remove Team</button> : null}
            {team2 !== "selecting" && !this.state.submitted && team2 !== null && this.state.submitted !== true ? <RosterCard team={team2} players={this.state.team2Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {team2 !== "selecting" ? <button onClick={this.removeTeam2}>Remove Team</button> : null}
            {team3 !== "selecting" && team3 !== null && this.state.submitted !== true ? <RosterCard team={team3} players={this.state.team3Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {team3 !== null && !this.state.submitted ? <button onClick={this.removeTeam3}>Remove Team</button> : null}
            {team4 !== "selecting" && team4 !== null && this.state.submitted !== true ? <RosterCard team={team4} players={this.state.team4Players} selectPlayer={this.addPlayerToTrade}/>: null}
            {team4 !== null && !this.state.submitted ? <button onClick={this.removeTeam4}>Remove Team</button> : null}
            {team1 === "selecting" ? <TeamList teams={all_teams} chooseTeam={this.chooseTeam1} changeTeam={this.changeTeam1} removeTeam={this.removeTeam1}/>: null}
            {team2 === "selecting" ? <TeamList teams={all_teams} chooseTeam={this.chooseTeam2} changeTeam={this.changeTeam2} removeTeam={this.removeTeam2}/>: null}
            {team3 === "selecting" ? <TeamList teams={all_teams} chooseTeam={this.chooseTeam3} changeTeam={this.changeTeam3} removeTeam={this.removeTeam3}/>: null}
            {team4 === "selecting" ? <TeamList teams={all_teams} chooseTeam={this.chooseTeam4} changeTeam={this.changeTeam4} removeTeam={this.removeTeam4}/>: null}
            {team3 === null ? <button onClick={this.addAThird}>Add third team</button> : null}
            {team4 === null && this.state.team3 ? <button onClick={this.addAFourth}>Add fourth team</button> : null}
            {!this.state.submitted && !this.state.saved ? <button onClick={this.handleSubmit}>Submit Trade</button> : null}
            {this.state.submitted ? <button onClick={this.handleSave}>Save Trade</button> : false}
            {this.state.submitted ? <button onClick={this.editTrade}>Edit Trade</button> : null}
            {this.state.tradedto1.length || this.state.tradedto2.length || this.state.tradedto3.length || this.state.tradedto4.length > 0 ? <button onClick={this.resetMachine}>Reset Trade Machine</button> : null}
            <Link to="/trades">See all trades</Link>
            </div>
        )
    }
}
export default MachineCard