import React, { Component } from 'react'
const PlayerCard  = props => {
        return(
    <div onClick={(event)=> props.selectPlayer(props.player, props.team)}>
        <img src={props.player.player_image}/>
    <div>{props.player.name}</div>
    <div>Salary:{props.player.salary}</div>
    <div> {props.player.trade_clause ? "No Trade Clause" : null }</div>
    </div>
        )
}
export default PlayerCard