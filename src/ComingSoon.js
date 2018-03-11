import React, {Component} from 'react';
import DDFooter from './DDFooter';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import logo from './assets/images/dd_logo.svg';


class ComingSoon extends Component {
    render() {
        return (

            <div>
                <Navbar>
                    <NavbarBrand className="App-title int" href="/"><img src={logo}/></NavbarBrand>
                </Navbar>
                <div className="comingSoonText">
                    <h1> The Disruptive Strengths Indicator (DSI) Diagnostic is Coming Soon!</h1>
                    <h3 align="center">Enter your email to be notified when it's ready!</h3>
                </div>

                <div className="row" align="center">
                    <form className="signUp">
                        <div className="formField">
                            <label> Email</label>
                            <input type="email" name="email" id="email"/>
                        </div>
                    </form>
                </div>
                <div class="row">
                    <div className="row" align="center">

                        <a href="https://whitneyjohnson.com/" target="_blank">
                            <button className="button">LEARN MORE</button>
                        </a>
                    </div>
                </div>
                <DDFooter/>
            </div>
        );
    }

}

export default ComingSoon;