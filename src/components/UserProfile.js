import React, { Component } from 'react'
import TradeList from '../components/TradeList'
const UserProfile  = props => {
    console.log(props)
    let findTeamLogoByName  = (name) => {
        debugger
        let team = props.all_teams.filter(t => t.name === name)
        return team[0].logo
    }

        return(
            <div>
            <br></br>
            <div class="ui third centered header"> {props.user[0].name}'s trades:</div>
            <TradeList createdBy={props.user} removeTrade={props.removeTrade} currentUser={props.currentUser} votes={props.votes} all_users={props.all_users} trades={props.trades} all_players={props.all_players} all_teams={props.all_teams}/>
            </div>
        )
}
export default UserProfile