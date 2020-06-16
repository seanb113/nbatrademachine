import React from 'react'
import TradeList from '../components/TradeList'
const UserProfile  = props => {
    console.log(props.user[0], props.currentUser)
        return(
            <div>
            <br></br>
            {props.user.id === props.currentUser.id ? <div class="ui third centered header"> Your trades:</div> : <div class="ui third centered header"> {props.user[0].name}'s trades:</div>}
            <TradeList createdBy={props.user} removeTrade={props.removeTrade} currentUser={props.currentUser} votes={props.votes} all_users={props.all_users} trades={props.trades} all_players={props.all_players} all_teams={props.all_teams} userProfile={true}/>
            </div>
        )
}
export default UserProfile