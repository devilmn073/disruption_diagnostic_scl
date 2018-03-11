import React, {Component} from 'react';
import DDFooter from './DDFooter';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, Card, Col, CardText, CardImg} from 'reactstrap';
import logo from './assets/images/dd_logo.svg';
import locator from './assets/images/locator.svg';


class TakeDiagnostic extends Component {
    render() {
        return (

            <div>
                <Navbar>
                    <NavbarBrand className="App-title int" href="/"><img src={logo}/></NavbarBrand>
                </Navbar>
                <div className="App-intro int">
                    <h1> Which diagnostic do you want to take?</h1>
                </div>
                <div className="row">
                    <div className="half left">
                        <Card>
                            <a href="/survey" className="circleIcon"><img src={locator} /></a>

                            <CardText>The S-CURVE LOCATOR helps you find where you're at on
                                your current curve. Lorem
                                ipsum dolor sit amet, consectetur
                                adipiscing elit eiusmod incididunt.</CardText>
                        </Card>
                    </div>
                    <div className="half right">
                        <Card>
                            <a href="/comingSoon" className="circleIcon">Get Started</a>

                            <CardText>The DISRUPTIVE STRENGTHS INDICATOR explores your disruptive
                                strengths and to what extent you are currently a disruptor or stabilizer. </CardText>
                        </Card>
                    </div>
                </div>


                <DDFooter/>
            </div>
        );
    }

}

export default TakeDiagnostic;
