import React, { Component } from 'react'
import PlayerCard from '../components/PlayerCard'

class RosterCard extends React.Component {
    render(props){
        let these_players = props.players.map(player => 
            player.team === props.team.name ? player : null)
        return(
            <div>
            <img src={props.team.logo}/>
            <div>Team: {props.team.name}</div>
            <div>Cap Space: {props.team.total_spent}</div>
            <div>
            {these_players.map(player => 
            <PlayerCard player={player}/>)}
            </div>
            </div>
        )
    }
}
export default RosterCard