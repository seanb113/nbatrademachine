import React from 'react'
import PlayerCard from '../components/PlayerCard'

const RosterCard = props => {
    console.log(props.team)
    console.log(props.players)
        // let these_players = this.props.players.map(player => 
        //     player.team === this.props.team.name ? player : null)
        return(
            <div class="ui column">
            <div>
            <i class="close icon" id="cardCloseIcon" onClick={()=>props.removeTeam(props.team)}> </i>
            </div>
            <div class="ui centered header">{props.team.name}</div>
            <img class="ui centered image" src={props.team.logo}/>
            <div class="ui celled list">
            {props.players.map(player => 
            <PlayerCard player={player} tradedPlayers={props.tradedPlayers} selectPlayer={props.selectPlayer}/>)}
            </div>
            </div>
        )
    }
export default RosterCard