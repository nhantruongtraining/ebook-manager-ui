import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><img
                            alt=""
                            src="logo.png"
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                        />{' '}<a href="http://localhost:3000/" className="navbar-brand">Ebook Management App</a></div>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Ebooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="*" className="nav-link">Sign In</Link>
                            </li>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;