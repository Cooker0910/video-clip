import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './components/login'
import Main from './components/main'
export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
            </Switch>
        </Router>      
    )
}