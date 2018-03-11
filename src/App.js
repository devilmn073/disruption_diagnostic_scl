import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TitlePage from './TitlePage.js';
import ManagerSetup from './ManagerSetup';
import Survey from './Survey';
import ResultLow from './ResultLowScore.js';
import ResultMid from './ResultMidScore.js';
import ResultHigh from './ResultHighScore.js';
import ThankYou from './ThankYouPage.js';
import EmployeeSetup from './EmployeeSetup.js';
import TakeDiagnostic from './TakeDiagnostic.js';
import ComingSoon from "./ComingSoon";

let hashHistory = BrowserRouter.hashHistory;

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={TitlePage} />
                    <Route path='/managerSetup' component={ManagerSetup} />
                    <Route path='/survey' component={Survey} />
                    <Route path='/resultlow' component={ResultLow} />
                    <Route path='/resultmid' component={ResultMid} />
                    <Route path='/resulthigh' component={ResultHigh} />
                    <Route path='/thankyou' component={ThankYou} />
                    <Route path='/employeesetup' component={EmployeeSetup} />
                    <Route path='/takeDiagnostic' component={TakeDiagnostic} />
                    <Route path='/comingSoon' component={ComingSoon} />

                </Switch>
            </BrowserRouter>
        );
    }

}

export default App;
