import React from 'react'
import {Popup, Button} from 'semantic-ui-react'

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

    let getButtons = () => {
        debugger
        if (props.tradeTo && props.team1 !== "selecting" && props.tradeTo.team_id !== props.team1.id)
        return <button class="small ui button" onClick={(e)=> this.props.tradeToprops.team1(e)}> Trade {props.tradeTo.name} to the {props.team1.name}? </button> 
        else if (props.tradeTo && props.team2 !== "selecting" && props.tradeTo.team_id !== props.team2.id) 
        return <button class="small ui button" onClick={(e)=> this.props.tradeToprops.team2(e)}>Trade {props.tradeTo.name} to the {props.team2.name}? </button>
        else if (props.tradeTo && props.team3 && props.tradeTo.team_id !== props.team3.id && props.team3 !== "selecting")
        return <button class="small ui button" onClick={(e)=> this.props.tradeToprops.team3(e)}>Trade {props.tradeTo.name} to the {props.team3.name}?</button>
        else if (props.tradeTo && props.team4 && props.tradeTo.team_id !== props.team4.id && props.team4 !== "selecting") 
        return <button class="small ui button" onClick={(e)=> this.props.tradeToprops.team4(e)}>Trade {props.tradeTo.name} to the {props.team4.name}?</button>
    }

    return(
        <Popup
        trigger={
    <div id={props.tradedPlayers !== undefined && disableCard(props.player) === true ? "ui-item-disabled" : "ui-item"} class="item" onClick={(event)=> props.selectPlayer(props.player)}>
        <img alt="" class="ui avatar image" src={props.player.player_image}/>
        <div class="content">
    <div class="header">{props.player.name} {getInitials(props.player.position)}</div>
    <div class="description">{props.player.salary === "-" ? "Two Way Contract" : "Salary: " + props.player.salary}</div>
    <div class="description">{parseInt(props.player.final_year_of_contract) - 2020} years</div>
    <div class="extra content"> 
    <div class="meta">{props.player.trade_clause ? "No Trade Clause" : null }</div>
    </div>
    </div>
    </div>}
    content={
        getButtons()
    }
    on='click'
    />
        )
}
export default PlayerCard