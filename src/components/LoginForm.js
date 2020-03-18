import React from "react"
// import {Link} from 'react-router-dom'
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

        <form onSubmit={this.handleLoginSubmit}>
            <input
            label="username" value={this.state.name} onChange={(event)=>this.setState({name: event.target.value})}
            />
            <input            
            type="password" label="password" value={this.state.password} onChange={(event)=>this.setState({password: event.target.value})}/>
            <button type="submit">Login </button>
            </form>

        ) 
    }
}

export default LoginForm