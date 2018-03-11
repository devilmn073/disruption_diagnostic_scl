import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DDFooter from './DDFooter.js';
import logo from './assets/images/dd_logo.svg';

export default class TitlePage extends Component {
    render() {
        return (
            <div className="titlePage">
                <h1 className="App-title"><img src={logo} /></h1>
                <p className="App-intro">
                    Dare to disrupt yourself! Personal disruption has proven to be one of the critical components of
                    innovation in the workplace. Take the Disruption Diagnostic to understand how to effectively
                    harness
                    disruption to manage career and company growth effectively.
                </p>
                <div className="row">
                    <Link to="/takeDiagnostic">
                        <button className="button" type="Submit">TAKE EMPLOYEE DIAGNOSTIC</button>
                    </Link>
                    <br/>
                </div>
                <div className="row">
                    <Link className="Link" to="/managerSetup">MANAGER DIAGNOSTIC SETUP</Link>
                    <br/>
                </div>
                <DDFooter/>
            </div>
        );
    }
}
