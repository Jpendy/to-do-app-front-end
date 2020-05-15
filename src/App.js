import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>

                        
                        <Route
                            path="/SignUp/"
                            exact
                            render={(routerProps) => <SignUp  {...routerProps} />}

                        />

                          <Route
                            path="/SignIn"
                            exact
                            render={(routerProps) => <SignIn {...routerProps} />}

                        />

                    </Switch>
                </Router>
            </div>
        )
    }
}
