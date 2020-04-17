import React, {Component} from 'react';

class SignUp extends Component {
    render() { 
        console.log(this.props)
        return (  
            <div class="ui form container">
        <form class="ui form" onSubmit = {this.props.handleSignupForm}> 
                <label for="name">Name:</label>
                <input class="signingUp" type = 'text' id = 'name'onChange ={this.props.handleOnChangeForm }/><br></br>
                <label for="team"  >Favorite Team:</label>
                <select class="signingUp" onChange={this.props.handleOnChangeForm} class="ui selection dropdown">
                {this.props.teams.map(t => {
                    return <option id='team' value={t}>{t}</option>
                })}
                </select>
                <label for="password">Password:</label>
                <input class="signingUp" type = 'password' id ='password' onChange ={this.props.handleOnChangeForm }/><br></br>
                <br></br>
                <button id="machineButtonGrid" class="ui button" type="submit" value="Submit">Submit</button>
        </form> 
        </div>
        );
    }
}
 
export default SignUp;