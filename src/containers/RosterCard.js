import React from 'react'
import PlayerCard from '../components/PlayerCard'

const RosterCard = props => {
        return(
            <div id="rosterColumn" class="ui column">
            <div>
            <i class="close icon" id="cardCloseIcon" onClick={()=>props.removeTeam(props.team)}> </i>
            </div>
            <div class="ui centered header">{props.team.name}</div>
            <div style={{justifyContent: "left"}}>
            <img alt="" style={{marginRight: "-1em", marginLeft: "1em"}}class="ui left floated image" src={props.team.logo}/>
            <p style={{fontVariant: "small-caps"}}>Total cap spent: {props.team.cap_spent}</p>
            <p style={{fontVariant: "small-caps"}}>Cap space: {props.team.cap_space}</p>
            <p style={{fontVariant: "small-caps"}}> Luxury Tax Space: {props.team.luxury_tax_space}</p>
            </div>
            <div class="ui celled list">
            {props.players.map(player => 
            <PlayerCard player={player} tradedPlayers={props.tradedPlayers} selectPlayer={props.selectPlayer} tradeTo={props.tradeTo} team1={props.team1} team2={props.team2} team3={props.team3} team4={props.team4} tradePlayer={props.tradePlayer}/>)}
            </div>
            </div>
        )
    }
export default RosterCard