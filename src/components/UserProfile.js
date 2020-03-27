import React, { Component } from 'react'
import TradeList from '../components/TradeList'
const UserProfile  = props => {
    console.log(props)
    let findTeamLogoByName  = (name) => {
        let team = props.all_teams.filter(t => t.name === name)
        return team.logo
    }

        return(
            <div>
            <br></br>
            <img src={findTeamLogoByName(props.user[0].name)}></img>
            <div class="ui third header"> {props.user[0].name}'s trades:</div>
            <TradeList createdBy={props.user} removeTrade={props.removeTrade} currentUser={props.currentUser} votes={props.votes} all_users={props.all_users} trades={props.trades} all_players={props.all_players} all_teams={props.all_teams}/>
            </div>
        )
}
export default UserProfile