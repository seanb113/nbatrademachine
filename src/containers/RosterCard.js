import React from 'react'
import PlayerCard from '../containers/PlayerCard'

const RosterCard = props => {
    console.log(props.team)
    console.log(props.players)
        return(
            <div id="rosterColumn" class="ui column">
            <div>
            <i class="close icon" id="cardCloseIcon" onClick={()=>props.removeTeam(props.team)}> </i>
            </div>
            <div class="ui centered header">{props.team.name}</div>
            <img alt="" class="ui centered image" src={props.team.logo}/>
            <div class="ui celled list">
            {props.players.map(player => 
            <PlayerCard player={player} tradedPlayers={props.tradedPlayers} selectPlayer={props.selectPlayer}/>)}
            </div>
            </div>
        )
    }
export default RosterCard