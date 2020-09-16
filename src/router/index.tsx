import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routesMap from '@router/routes'
const Routes: React.FC<any> = () => {
    return (
        <Router>
            <Switch>
                {
                    routesMap.map((route: any, index: number) => {
                        return <Route   key={index} render={(props) => {
                            return <route.component {...props} route={route} />
                        }}></Route>
                    })
                }
            </Switch>
        </Router>
    )
}

export default Routes


