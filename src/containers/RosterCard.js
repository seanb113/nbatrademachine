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
            <PlayerCard player={player} tradedPlayers={props.tradedPlayers} selectPlayer={props.selectPlayer} tradeTo={props.tradeTo} team1={props.team1} team2={props.team2} team3={props.team3} team4={props.team4}/>)}
            </div>
            </div>
        )
    }
export default RosterCard