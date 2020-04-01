import React, { Component } from 'react'
import RosterCard from '../components/RosterCard'
import PlayerCard from '../components/PlayerCard'
import UserProfile from '../components/UserProfile'
import {Route, Link} from 'react-router-dom'
import { Segment, Fragment, Grid } from 'semantic-ui-react'
const TradeCard = props => {
    console.log(props.currentUser)
        
        let tradeVotes = props.votes !== undefined ? props.votes.filter(v=>v.trade_id === props.trade.id) : []
        
        let tradeLikes = tradeVotes.filter(v=> v.category === "like")
        
        let tradeVetoes = tradeVotes.filter(v=> v.category === "veto")

        const returnNameFromId = (id) => {
            // debugger
            let team = props.all_teams.filter(t => t.id === id)
            return team[0].name
        }

        const checkVeto = () => {
            debugger
            let teams = props.trade.swaps.map(s=> s.team_id)
            let tradev = tradeVotes.map(v => v.user_id)
            let teamNames = teams.map(t=>returnNameFromId(t))
            if (!teamNames.includes(props.currentUser.team))
            alert("Sorry, Adam Silver. Only fans of the teams involved can veto a trade")
            else if (tradev.includes(props.currentUser.id) && props.currentUser.id !== props.createdBy[0].id)
            console.log("You cannot vote twice")
            else
            postVote("veto")
        }

        const sortVote = (e) => {
            if (e.target.id === "veto")
            checkVeto()
            else
            checkLike()
        }

        const checkLike = () => {
            let tv = tradeVotes.map(v => v.user_id)
            debugger
            !tv.includes(props.currentUser.id)
            &&
            props.currentUser.id !== props.createdBy[0].id
            ?
            postVote("like")
            :
            console.log("you can not vote for this trade")
        }

        const postVote = (vote) => {
            // debugger
            // event.preventDefault()
            let user_id = props.currentUser.id
            let trade_id = props.trade.id
            console.log(props)
            fetch("http://localhost:5000/votes", {
                method: "POST",
                headers: {
                    "Content-Type" :"application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    category: vote,
                    user_id: user_id,
                    trade_id: trade_id
                })
            }).then(r=>r.json())
            .catch(error => console.error('Error:', error))
                .then(r=> props.addVote(r)
                )
        }

        const deleteTrade = () => {
            debugger
            let id = props.trade.id
            fetch(`http://localhost:5000/trades/${id}`, {
                method: 'delete'
            }).then(r => r.text())
            .then(props.deleteThisTrade(id)
            )
            }

        const numberWithCommas = (x) => {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }

        let tradeClausesInTrade = (players) => {
            let noTrades = players.map(p=>p.name) 
            if(players.length === 1)
            return `${players[0].name} has a no trade clause that must be waived for this trade to go through`
            else
            return `${noTrades.join(", ")} have trade clauses that must be waived for this trade to go through`
        }

        let findTeamLogoByName  = (name) => {
        debugger
        let team = props.teams.filter(t => t.name === name)
        return team[0].logo
    }
        
        let tradeclauses = [...props.player1.filter(p => p.trade_clause), ...props.player2.filter(p => p.trade_clause), ...props.player3.filter(p => p.trade_clause), ...props.player4.filter(p => p.trade_clause)]

            // console.log(props.createdBy[0])
            // console.log(props.currentUser)
        return(
            // let tradeUser = this.findUser(this.props.user)
            <div id="tradingCard" class="ui centered card">
            <div class="content">
            <div class="meta">{!props.createdBy ? "Your trade..." : null}
            </div>
            <div class="right floated author">{props.currentUser !== undefined && props.createdBy !== undefined && props.createdBy[0].id === props.currentUser.id ? <i onClick={deleteTrade} class="icon trash alternate outline"></i> : null}</div>
            <br/>
            {props.createdBy !== undefined 
            ?
            <Grid as={Link} to={`/user/${props.createdBy[0].id}`}>
            <div class="extra content">
            <div class="center floated author">{props.createdBy !== undefined ? props.createdBy[0].name : null}
            <img class="right floated mini ui avatar image" src={findTeamLogoByName(props.createdBy[0].team)}/>
            </div>
            </div>
            </Grid>
            :
            null}
            <br/>
            <br/>
            <div class="header">
            {props.player1.length > 0 ? props.team1.name + " get:" : null}
            </div>
            <div class="ui celled list">
            {props.player1.length > 0 ? props.player1.map(player => 
            <PlayerCard team={props.team1} player={player} selectPlayer={props.dontrade1}/>): null}
            </div>
            <div class="header">
            {props.player2.length > 0 ? props.team2.name + " get:" : null}
            </div>
            <div class="ui celled list">
            {props.player2.length > 0 ? props.player2.map(player =>
            <PlayerCard team={props.team2} player={player} selectPlayer={props.dontrade2}/>) : null}
            </div>
            <div class="header">
            {props.player3.length > 0 ? props.team3.name + " get:" : null}
            </div>
            <div class="ui celled list">
            {props.player3.length > 0 ? props.player3.map(player =>
            <PlayerCard team={props.team3} player={player} selectPlayer={props.dontrade3}/>) : null}
            </div>
            <div class="header">
            {props.player4.length > 0 ? props.team4.name + " get:" : null}
            </div>
            <div class="ui celled list">
            {props.player4.length > 0 ? props.player4.map(player =>
            <PlayerCard team={props.team4} player={player} selectPlayer={props.dontrade4}/>) : null}
            </div>
            <div class="meta">{tradeclauses.length > 0 ? tradeClausesInTrade(tradeclauses) : null }</div>
            <div class= {props.tooMuchSalary !== false && props.tooMuchSalary !== undefined ? "ui error message" : null}>
            <ul class="list">{props.tooMuchSalary !== false && props.tooMuchSalary !== undefined ? `${props.tooMuchSalary.name} taking in too much salary` : null}</ul>
            <br/>
            <div>{props.tooMuchSalary !== false && props.tooMuchSalary !== undefined ? `${props.notValidReason}` : null}</div>
            <br/>
            <div>{props.tooMuchSalary !== false && props.tooMuchSalary !== undefined ? `Cut $${numberWithCommas(props.numberToCut)} from incoming salary` : null}</div>
            </div>
            </div>
            {props.createdBy !== undefined
            ?
            <div class="extra content">
                <div class="ui two buttons">
            <div id="like" size="mini" class="ui labeled button" tabindex="0">
            <div id="like" size="mini" class="ui black button" onClick={((e)=> sortVote(e))}>
                <i id="like" class="thumbs up icon"></i> Like
            </div>
            <a class="ui basic black left pointing label">
                {tradeLikes.length}
            </a>
            </div>
            <div id="veto" size="mini" class="ui labeled button" tabindex="0">
            <div id="veto" size="mini" class="ui basic black button" onClick={((e)=> sortVote(e))}>
                <i id="veto" class="thumbs down icon"></i> Veto
            </div>
            <a class="ui basic left pointing black label">
                {tradeVetoes.length}
            </a>
            </div>
            </div>
            </div>
            :
            null}
            </div>
        )
    }

export default TradeCard