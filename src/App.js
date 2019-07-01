import React, { memo, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import 'material-components-web/dist/material-components-web.min.css';

const Home = lazy(() => import('./routes/Home'));

const homeRoute = [
    { exact: true, path: "/", component: Home },
];

const App = memo(() => {
    return (
        <div className="mdc-typography--body1">
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {homeRoute.map((route) => (
                        <route.component key={route.path} {...route} />
                    ))}
                </Switch>
            </Suspense>
        </div>
    );
});

export default App;