import React, { Component } from 'react'
const TeamList  = props => {
    console.log(props.teams)
    
        const teamList = props.teams.map((team) =>
        <div onClick={()=>props.chooseTeam(team)}>{team.name}</div>)
        return(
            <div>
            <div class="ui-list">{teamList}</div>
            </div>)

}
export default TeamList