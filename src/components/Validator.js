// import React, { Component } from 'react';

// export default class Validator extends Component {

//    state = {
//     incomingPlayers: [],
//     outgoingPlayers: [],
//     selectedTeam: [],
//     salaryCap: 116000000,
//     luxuryTax: 139000000
//   };

//   isUnderCap = (salary) => {
//     return salary < this.props.salaryCap;
//   };

//   isUnderTax = (team) => {
//     return this.salaryOfTeam(team) < this.props.luxuryTax;
//   };

//   salaryToNumber = (salaryString) => {
//     return parseInt(salaryString.replace(/\$|\,/g, ''));
//   };

//   salaryOfTeam = (team) => {
//     return _.reduce(team, (sum, player) => {
//       return sum + this.salaryToNumber(player.salary);
//     }, 0);
//   };

//   potentialSalary = (currentSalary, incomingSalary) => {
//     return currentSalary + incomingSalary;
//   };

//   isTrade = () => {
//     // TODO this can be shorter, refactor
//     let check = false;

//     this.props.incomingPlayers.forEach((teamIncoming) => {
//       if(teamIncoming.length > 0) {
//         check = true;
//       }
//     });

//     return check;
//   };

//   determineValidity = () => {
//     return _.reduce(this.props.selectedTeams, (check, team, i) => {
//       let incomingSalary = this.salaryOfTeam(this.props.incomingPlayers[i]);
//       let outgoingSalary = this.salaryOfTeam(this.props.outgoingPlayers[i]);

//       let potentialSalary = this.salaryToNumber(team.totalSalary) + incomingSalary;
//       let underTax = (potentialSalary < this.props.luxuryTax);

//       let teams = _.cloneDeep(check.teams);
//       // let targetSalary = (incomingSalary - (outgoingSalary * 1.25 + 100000));
//       teams.push(`${team.teamName} taking in too much salary`);

//       // 1. Any team under the cap can take any amount in up to the cap level + $100,000
//       // 2. Teams under tax but over cap. I think it's 150% but we'll see. Most cases
//       // 2.5. Under 9.8M in incoming: 150+100 else : 125 + 100000
//       // 3. Any team can take back up to 125% of their outgoing salaries + $100,000 no matter what
//       if(potentialSalary < (this.props.salaryCap + 100000)) {
//         console.log('Potential salary is less than salary cap + 100,000');
//       }
//       else if(underTax && incomingSalary < 98000000) {
//         if(incomingSalary > (outgoingSalary * 1.5) + 100000) {
//           // console.log('under tax and incoming more than 150% + 100,000 of outgoing');

//           if(incomingSalary > (outgoingSalary * 1.25) + 100000) {

//             return {
//               valid: false,
//               teams: teams
//             };
//           }
//         }
//       }
//       else if(incomingSalary > (outgoingSalary * 1.25) + 100000) {
//         // console.log('incoming is greater than 125% + 100,000 of outgoing');

//         return {
//           valid: false,
//           teams: teams
//         };
//       }

//       return check;
//     },
//     { valid: true, teams: [] });
//   }
// }