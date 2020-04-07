import React from "react"
import {Link} from 'react-router-dom'
import Logo from '../logo_transparent.png'

class LoginForm extends React.Component {
    state = {
        name: "",
        password: ""
    }

      handleLoginSubmit = (e) => {
          e.preventDefault()
        fetch('http://localhost:5000/login', {
        method: "POST",
        headers: {
            "Content-Type" :"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: this.state.name,
            password: this.state.password
        })
        }).then(res => res.json())
        .then(data => {
            // debugger
            console.log(data)
            if(data.successful){
                let user = data.data
                localStorage.setItem("jwt", data.token)
                this.props.loginSubmit(user)}
                else{
                    alert(data.message)
        }})
      }
    
render(){
     
        return(
            <div>
            <div class="ui form container">
        <form class="ui form" onSubmit={this.handleLoginSubmit}>
            <img id="loginLogo" class="ui small image" src={Logo}></img>
            <input placeholder="name"
            label="username" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})}
            />
            <input placeholder="password"       
            type="password" label="password" value={this.state.password} onChange={(event)=>this.setState({password: event.target.value})}/>
            <br></br>
            <div id="loginButton">
            <button id="machineButtonGrid" class="ui button" type="submit" value="Submit">Login </button>
            </div>
            <div>
            <Link to="/signup">Sign Up</Link>
            </div>
            </form>
            </div>
            </div>

        ) 
    }
}

export default LoginForm