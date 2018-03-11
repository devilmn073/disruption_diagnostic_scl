import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import DDFooter from './DDFooter.js';
import signature from './assets/images/signature.svg';
import logo from './assets/images/dd_logo.svg';

export default class ThankYouPage extends Component {
    render() {
        return (

            <div className="App">
                <Navbar>
                    <NavbarBrand className="App-title int" href="/"><img src={logo} /></NavbarBrand>
                </Navbar>

                <h1 className="App-title" align="center">Thank you!</h1>
                <p className="App-intro" align="center">
                    Personal disruption has proven to be one of the strongest contributing factos to driving innovation
                    on the job. I hope you were able to gain some valuable insights about where you and your tearm on
                    the S-curve and use this information to create a strategy for continuous innovation. I look forward
                    to continuing the conversation about personal disruption with you.
                    <br /><br />
                    <p align="left">My Best,<br />
                    <img src={signature} className="signature" align="left"/>
                </p>
                </p>
                <br /><br />
                <br /><br />
                <div className="row">
                    <a href="https://whitneyjohnson.com/" target="_blank"><button className="button">LEARN MORE</button></a>
                </div>
                <DDFooter/>
            </div>
        );
    }
}
