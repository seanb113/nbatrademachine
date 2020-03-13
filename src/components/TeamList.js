import React, { Component } from 'react'
const TeamList  = props => {
    console.log(props.teams)
        const teamList = props.teams.map((team) =>
        <li onClick={()=>props.chooseTeam(team)}>{team.name}</li>)
        return(
            <div>
            <ul>{teamList}</ul>
            </div>)

}
export default TeamList