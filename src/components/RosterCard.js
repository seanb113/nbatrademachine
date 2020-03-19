import React from 'react'
import PlayerCard from '../components/PlayerCard'

const RosterCard = props => {
    console.log(props.team)
    console.log(props.players)
        // let these_players = this.props.players.map(player => 
        //     player.team === this.props.team.name ? player : null)
        return(
            <div>
            <img src={props.team.logo}/>
            <button onClick={()=>props.removeTeam(props.team)}>Remove Team</button>
            <div>Team: {props.team.name}</div>
            <div>Cap Space: {props.team.total_spent}</div>
            <div>
            {console.log(props)}
            {props.players.map(player => 
            <PlayerCard player={player} selectPlayer={props.selectPlayer}/>)}
            </div>
            </div>
        )
    }
export default RosterCard