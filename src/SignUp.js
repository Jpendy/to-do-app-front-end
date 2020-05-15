import React, { Component } from 'react'
import request from 'superagent';


export default class SignUp extends Component {
     
    state = {
        email: '',
        password: ''
    }

    handleSubmit = async(e) => {
        e.preventDefault();
        console.log(this.state)
        let token = await request.post('http://localhost:3000/auth/signup', this.state)
        localStorage.setItem('TOKEN_KEY', token.body.token)
        // this.props.history.push('/SignIn')
        console.log(token.body.token)
    }

    handleChange = (e) => {
        const newState = {}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        const {email, password} = this.state;
        return (
            <div>
                
            <form onSubmit= { this.handleSubmit }>

                <label>
                    Email:
                    <input onChange={this.handleChange} name="email" value={email} />
                </label>

                <label>
                    Password:
                    <input onChange={this.handleChange} name="password" value={password} />
                </label>

                <button>Submit</button>

            </form>

            </div>
        )
    }
}
