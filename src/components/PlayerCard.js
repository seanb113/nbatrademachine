import React, { Component } from 'react'
import { Divider, Image } from 'semantic-ui-react'
const PlayerCard  = props => {
            console.log("playercard", props.selectPlayer)
        return(
    <div class="ui-grid" z-index='1' onClick={(event)=> props.selectPlayer(props.player)}>
        <Image class="ui-image" src={props.player.player_image} size="tiny"/>
    <div class="ui-column">{props.player.name}</div>
    <div class="ui-column">Salary:{props.player.salary}</div>
    <div class="ui-column"> {props.player.trade_clause ? "No Trade Clause" : null }</div>
    {/* <div class="ui-column">id={props.player.id}</div> */}
    </div>
        )
}
export default PlayerCard