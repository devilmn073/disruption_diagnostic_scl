import React, { Component } from 'react';
import fb from './assets/images/facebook.svg';
import twitter from './assets/images/twitter.svg';
import linkedin from './assets/images/linkedin.svg';
import email from './assets/images/email.svg';


class DDFooter extends Component {
    render() {
        return (
            <footer className="navbar-fixed-bottom">
                <div className="container">
                    <div className="row">
                        <div className="row">
                            <br />
                            <br />
                            <br />
                            <br />

                            <div className="social" align="center">
                                <a href="https://facebook.com" target="_blank"><img src={fb} /></a>
                                <a href="https://twitter.com" target="_blank"><img src={twitter} /></a>
                                <a href="https://linkedin.com" target="_blank"><img src={linkedin} /></a>
                                <a href="mailto:sample@sample.com?subject=Disruption%20Diagnostic"><img src={email} /></a>
                            </div>
                            <div className="copyright">
                                <br />

                                <small>&copy; 2015 Whitney Johnson All rights reserved.</small>

                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default DDFooter;