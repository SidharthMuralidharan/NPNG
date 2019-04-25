import React from 'react';
import ReactDOM from 'react-dom';
import Login from './../components/loginComponent/loginComponent';
import LandingComponent from './../components/landingComponent/landingComponent';
import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
    <Router>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/welcome">Users</Link>
                </li>
            </ul> */}
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/welcome/:username" component={LandingComponent} />
            </Switch>
    </Router>
)

// ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(routing, document.getElementById('root'))