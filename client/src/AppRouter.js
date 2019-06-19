import React from 'react';
import {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Homepage from './components/pages/Homepage';

class AppRouter extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Homepage} />
            </Router>
        )
    }
}

export default AppRouter;