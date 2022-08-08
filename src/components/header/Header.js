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
                                <Link to="/ebooks" className="nav-link">Ebooks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Sign In</Link>
                            </li>
                        </div>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>

                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent;