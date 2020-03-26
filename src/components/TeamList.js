import React, { Component } from 'react'
const TeamList  = props => {
    console.log(props.teams)
    
        const teamList = props.teams.map((team) =>
        <div class="item" onClick={()=>props.chooseTeam(team)}> <img class="ui avatar image" src={team.logo}/> {team.name}</div>)
        return(
            <div>
            <div class="ui-list">{teamList}</div>
            </div>)

}
export default TeamList