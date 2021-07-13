import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Startups from "../pages/Startups";
import Projects from "../pages/Projects";

function Dispatcher() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <p>This is the home page</p>
                </Route>
                <Route path="/startups" component={Startups} />
                <Route path="/projects" component={Projects} />
            </Switch>
        </Router>
    );
}

export default Dispatcher;