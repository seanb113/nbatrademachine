import React, { Component } from 'react'
const TeamList  = props => {
        return(
            props.teams.map(team =>
            <div onClick={props.changeTeam(team)}>
                {team.name}
            
            </div>))
}
export default TeamList