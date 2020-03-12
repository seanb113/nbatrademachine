import React, { Component } from 'react'
import RosterCard from '../components/RosterCard'
class TradeCard extends React.Component {
    state = {
        team1: null,
        team2: null,
        team3: null,
        team4: null,
        team1players: [],
        team2players: [],
        team3players: [],
        team4players: []
    }
    componentDidMount(){
        this.setState({
        team1: this.props.team1,
        team2: this.props.team2,
        team3: this.props.team3,
        team4: this.props.team4,
        team1players: this.props.player1,
        team2players: this.props.player2,
        team3players: this.props.player3,
        team4players: this.props.player4
        })
    }
    render(){
        return(
            <RosterCard team={this.state.team1} players={this.state.team1players} selectPlayer={this.props.selectPlayer}/>,
            <RosterCard team={this.state.team2} players={this.state.team2players} selectPlayer={this.props.selectPlayer}/>,
            <RosterCard team={this.state.team3} players={this.state.team3players} selectPlayer={this.props.selectPlayer}/>,
            <RosterCard team={this.state.team4} players={this.state.team4players} selectPlayer={this.props.selectPlayer}/>
        )
    }
}
export default TradeCard