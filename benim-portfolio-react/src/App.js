import React from "react";
import { Router, Switch, Route } from "react-router";
import AboutMe from "./About-me";
import Portfolio from "./Portfolio";
import Projects from "./Projects";
import { createBrowserHistory } from "history";
import Navbar from "./Navbar";
import Admin from "./Admin";
import AdminPortfolios from "./admin-portfolios";
import AdminSkills from "./admin-skills";

const history = createBrowserHistory();

class App extends React.Component {

    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Switch>
                        <Route exact path="/projects" component={Projects} />
                        <Route exact path="/portfolio" component={Portfolio} />
                        <Route exact path="/about-me" component={AboutMe} />
                        <Route exact path="/alohomora" component={Admin} />
                        <Route exact path="/admin-portfolios" render={(props) => <AdminPortfolios {...props}/>} />
                        <Route exact path="/admin-skills" component={AdminSkills} />
                        <Route exact path="/logout" render={() => {
                            sessionStorage.clear();
                            history.push('/alohomora');
                        }}/>
                    </Switch>
                </div >
            </Router>
        )
    }
}

export default App;
