import React, { Component } from 'react'
const TeamList  = props => {
    console.log(props.teams)
    
        const teamList = props.teams.map((team) =>
        <div class="item" onClick={()=>props.chooseTeam(team)}> <img class="ui avatar image" src={team.logo}/> 
        <div class="content">
        <a>{team.name}</a>
        </div>
        </div>)
        return(
            <div>
            <div id="teamList" class="content">
            <div class="ui centered header">Pick a team</div>
            <div class="ui list">{teamList}</div>
            </div>
            </div>
    )

}
export default TeamList