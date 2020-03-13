import React, { Component } from 'react'
import RosterCard from '../components/RosterCard'
import PlayerCard from '../components/PlayerCard'
const TradeCard = props => {
    // state = {
    //     team1: null,
    //     team2: null,
    //     team3: null,
    //     team4: null,
    //     team1players: [],
    //     team2players: [],
    //     team3players: [],
    //     team4players: []
    // }
    // componentDidMount(){
    //     this.setState({
    //     team1: this.props.team1,
    //     team2: this.props.team2,
    //     team3: this.props.team3,
    //     team4: this.props.team4,
    //     team1players: this.props.player1,
    //     team2players: this.props.player2,
    //     team3players: this.props.player3,
    //     team4players: this.props.player4
    //     })
    // }
    // render(){
        return(
            <div>
            <div>
            {props.player1.length > 0 ? props.team1.name + " get:" : null}
            {props.player1.length > 0 ? props.player1.map(player => 
            <PlayerCard team={props.team1} player={player} selectPlayer={props.dontrade1}/>): null}
            </div>
            <div>
            {props.player2.length > 0 ? props.team2.name + " get:" : null}
            {props.player2.length > 0 ? props.player2.map(player =>
            <PlayerCard team={props.team2} player={player} selectPlayer={props.dontrade2}/>) : null}
            </div>
            <div>
            {props.player3.length > 0 ? props.team3.name + " get:" : null}
            {props.player3 > 0 ? props.player3.map(player =>
            <PlayerCard team={props.team3} player={player} selectPlayer={props.dontrade3}/>) : null}
            </div>
            <div>
            {props.player4.length > 0 ? props.team4.name + " get:" : null}
            {props.player4.length > 0 ? props.player4.map(player =>
            <PlayerCard team={props.team4} player={player} selectPlayer={props.dontrade4}/>) : null}
            </div>
            </div>
        )
    }

export default TradeCard