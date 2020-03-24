import React from 'react';


class SignUp extends React.Component {

    
  
    render() { 
        console.log(this.props)
        return (  
        <form onSubmit = {this.props.handleSignupForm}> 
                <label for="name">Name:</label>
                <input type = 'text' id = 'name'onChange ={this.props.handleOnChangeForm }/><br></br>
                <label for="team"  >Favorite Team:</label>
                <select>
                {this.props.teams.map(t => {
                    return <option value="t">{t}</option>
                })}
                </select>
                <label for="name">Password:</label>
                <input type = 'password' id = 'password'onChange ={this.props.handleOnChangeForm }/><br></br>

                <button type="submit" value="Submit">Submit</button>
        </form> 
        );
    }
}
 
export default SignUp;