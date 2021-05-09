import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  handleChanges = e => {
    this.setState ({
      [e.target.name]: e.target.value
  }
    )
}

  submitChanges = event => {
    event.preventDefault()
    const { username, password } = this.state;
    console.log('LoginForm', event, username, password);
    if (!username || !password) return;
    // this.props.handleLogin(this.state.username, this.state.password)  //!Why doesn't work?!
    this.props.handleLogin(this.state);
  }
  
  render() {
    
    const { username, password } = this.state;
    const isEnabled = username.length > 0 && password.length > 0;

    return (
      <form onSubmit={event => this.submitChanges(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" 
              onChange={e => this.handleChanges(e)}
              value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" 
              onChange={e => this.handleChanges(e)}
              value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit" 
          disabled={!isEnabled}>Submit</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
