import React from 'react'
import "./NavBar.css"
import About from '../About/About'
import Home from '../Home/Home'
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to=""><img src="https://logopond.com/logos/504b03989f3e45617d12cfb47978f2b4.png" height="100" width="100" alt="Studypond Logo"/></Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="">
                        <Home />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>

    )
}

export default NavBar;