import React from 'react'
const TeamList  = props => {
    const teamList = props.teams.map((team) =>
        <div class="item" onClick={()=>props.chooseTeam(team)}> <img alt="" class="ui avatar image" src={team.logo}/> 
        <div class="content">
        <a href="#top">{team.name}</a>
        </div>
        </div>)
        return(
            <div id="teamList">
            {props.team !== "team1" ? <i class="close icon" id="cardCloseIcon" onClick={()=>props.dontaddteam(props.team)}> </i> : null}
            <div>
            <div class="content">
            <div class="ui centered header">Pick a team</div>
            <div class="ui list">{teamList}</div>
            </div>
            </div>
            </div>
    )

}
export default TeamList