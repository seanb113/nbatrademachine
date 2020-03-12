import React, { Component } from 'react'
const PlayerCard  = props => {
        return(
    <div onClick={()=> this.props.selectPlayer()}>
        <img src={props.player.player_pic}/>
    <div>{props.player.name}</div>
    <div>Salary:{props.player.salary}</div>
    <div> {props.player.trade_clause ? "No Trade Clause" : null }</div>
    </div>
        )
}
export default PlayerCard