import React from 'react';

import {Route, Link, Switch} from 'react-router-dom';
import PageA from './altpages/pageA';
import PageB from './altpages/pageB';
import PageC from './pageC';


const error404 = ({ location }) => (
    <h3>Error 404: Page not Found for <code>{location.pathname}</code></h3>
)


class Router extends React.Component {
    constructor() {
        super();
    }



render () {

    return (
    <div>
        <div class = "nav">
        <ul>
            <li>
                <Link to = "/pageA">Page A</Link>
                <Link to = "/pageB">Page B</Link>
                <Link to = "/pageC">Page C</Link>
            </li>
        </ul>
        <hr />
        <Switch>
            <Route exact path = "/">
                <PageA />
            </Route>
            <Route path = "/pageA">
                <PageA />
            </Route>
            <Route path = "/pageB">
                <PageB />
            </Route>
            <Route path = "/pageC">
                <PageC />
            </Route>            
            <Route component={error404} />
        </Switch>
        </div>
    </div>
    )
    };
}

export default Router;