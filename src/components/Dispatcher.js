import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Startups from "../pages/Startups";
import Projects from "../pages/Projects";
import Homepage from "../pages/Homepage";

function Dispatcher() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/startups" component={Startups} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        </Router>
    );
}

export default Dispatcher;