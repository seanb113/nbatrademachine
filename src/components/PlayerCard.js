import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
const PlayerCard  = props => {
            console.log("playercard", props.tradedPlayers)
    let disableCard = (player) => {
        
        if (props.tradedPlayers.includes(player))
        return true
        else
        return false
    }

    let getInitials = (string) => {
        
        let initials = string.match(/\b\w/g) || []
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
    }

        return(
    <div class="tooltip" id={props.tradedPlayers !== undefined && disableCard(props.player) === true ? "ui-item-disabled" : "ui-item"} class="item" onClick={(event)=> props.selectPlayer(props.player)}>
        <img class="ui avatar image" src={props.player.player_image}/>
        <div class="content">
    <div class="header">{props.player.name} {getInitials(props.player.position)}</div>
    <div class="description">{props.player.salary === "-" ? "Two Way Contract" : "Salary: " + props.player.salary}</div>
    <div class="description">{parseInt(props.player.final_year_of_contract) - 2020} years</div>
    <div class="extra content"> 
    <div class="meta">{props.player.trade_clause ? "No Trade Clause" : null }</div>
    </div>
    {/* <div class="ui-column">id={props.player.id}</div> */}
    </div>
    </div>
        )
}
export default PlayerCard