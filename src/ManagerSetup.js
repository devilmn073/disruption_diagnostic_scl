import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import logo from './assets/images/dd_logo.svg';
import DDFooter from './DDFooter';


class ManagerSetup extends Component {
    render() {
        return (

            <div>
                <Navbar>
                    <NavbarBrand className="App-title int" href="/"><img src={logo} /></NavbarBrand>
                </Navbar>
                <div className="App-intro int">
                    <h1> Just a little info to get you started...</h1>
                </div>

                <div className="row">
                    <form className="signUp">
                        <div className="formField">
                            <label>Company Name</label>
                            <input type="text"  name="companyname" id="companyname"/>
                        </div>
                        <div className="formField">
                            <label>Activation Start Date</label>
                            <input type="date" name="startdate"/>
                        </div>
                        <div className="formField">
                            <label>Activation End Date</label>
                            <input type="date" name="enddate"/>
                        </div>
                        <button className="button" type="submit">SUBMIT </button>
                    </form>
                </div>
                <DDFooter/>
            </div>

        );
    }

}

export default ManagerSetup;
