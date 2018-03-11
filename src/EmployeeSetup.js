import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand} from 'reactstrap';
import logo from './assets/images/dd_logo.svg';
import DDFooter from './DDFooter';


class EmployeeSetup extends Component {
    render() {
        return (

            <div>
                <Navbar>
                    <NavbarBrand className="App-title int"><a href="/"><img src={logo} /></a></NavbarBrand>
                </Navbar>
                <div className="App-intro int">
                    <h1> Just a little info to get you started...</h1>
                </div>

                <div className="row">
                    <form className="signUp">
                        <div className="formField">
                            <label>Enter Your Name</label>
                            <input type="text"  name="employeeName" id="employeeName"/>
                        </div>
                        <div className="formField">
                            <label>Enter Company ID</label>
                            <input type="text"  name="companyID" id="companyID"/>
                        </div>
                       <Link to="/takeDiagnostic">
                           <button className="button" type="submit">SUBMIT</button>
                       </Link>
                    </form>
                </div>
                <DDFooter/>
            </div>

        );
    }

}

export default EmployeeSetup;
