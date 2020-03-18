import React, { Component } from 'react'
import TradeList from '../components/TradeList'
const UserProfile  = props => {
        return(
            <div>
            {props.all_users[0].name}'s trades:
            <TradeList all_users={props.all_users} trades={props.trades} all_players={props.all_players} all_teams={props.all_teams}/>
            </div>
        )
}
export default UserProfile