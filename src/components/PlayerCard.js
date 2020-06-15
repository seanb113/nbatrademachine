import React, {Component} from 'react'
import {Popup, Dropdown, Button} from 'semantic-ui-react'

class PlayerCard extends Component {

    state = {
        open: false
    }

    disableCard = (player) => {
        if (this.props.tradedPlayers.includes(player))
        return true
        else
        return false
    }

    getInitials = (string) => {
        let initials = string.match(/\b\w/g) || []
        return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase()
    }

    closePopup = () => {
        this.setState({
            isOpen: false
        })
    }

    render(){
    let theTeams = [this.props.team1, this.props.team2, this.props.team3, this.props.team4].filter( team => team ? team.id !== this.props.player.team_id : null)
    let teamOptions = theTeams.map(team => team.name).filter(t => t !== undefined)
    return(
        console.log(teamOptions),
        <Popup
        trigger={
    <div id={this.props.tradedPlayers !== undefined && this.disableCard(this.props.player) === true ? "ui-item-disabled" : "ui-item"} class="item" onClick={(event)=> this.props.selectPlayer(this.props.player)}>
        <img alt="" class="ui avatar image" src={this.props.player.player_image}/>
        <div class="content">
    <div class="header">{this.props.player.name} {this.getInitials(this.props.player.position)}</div>
    <div class="description">{this.props.player.salary === "-" ? "Two Way Contract" : "Salary: " + this.props.player.salary}</div>
    <div class="description">{parseInt(this.props.player.final_year_of_contract) - 2020} years</div>
    <div class="extra content"> 
    <div class="meta">{this.props.player.trade_clause ? "No Trade Clause" : null }</div>
    </div>
    </div>
    </div>}
    content={
        <Dropdown.Menu onClick={this.closePopup}>
            {teamOptions.map(team => <Dropdown.Item onClick={(e)=>this.props.tradePlayer(team)}>Trade to {team.split(' ').slice(-1)[0]}</Dropdown.Item>)}
        </Dropdown.Menu>
    }
    on='click'
    open={this.state.isOpen} 
    />
        )
}
}
export default PlayerCard