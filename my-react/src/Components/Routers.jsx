import React from 'react'
import {
    BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import { Login } from './Login';
import {Body} from './B_Body/Body'
import {Navigation}from './A_Header/Navigation'

export const Routers = () => {
    return (
      <div>
        <Router>
           <Navigation/>
      <div>
        <nav>
          <ul>
            <li>
              <Route path="/login">login
              <Login/>
              </Route>
            </li>
            <li>
              <Route path="/body">main
              <Body/>
              </Route>
            </li>
            <li>
              <Route path="/navigation">Users
              <Navigation/>
              </Route>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        
      </div>
    </Router>
    </div>
    )
}
