import React, { Component } from 'react'
const PlayerCard  = props => {
        return(
    <div z-index='1' onClick={(event)=> props.selectPlayer(props.player)}>
        <img src={props.player.player_image}/>
    <div>{props.player.name}</div>
    <div>Salary:{props.player.salary}</div>
    <div> {props.player.trade_clause ? "No Trade Clause" : null }</div>
    <div>id={props.player.id}</div>
    </div>
        )
}
export default PlayerCard