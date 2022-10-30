import React, { Component } from 'react'
import { Navbar,Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Educators from './Educators';
import Students from './Students';
import Schools from './Schools';
import Logout  from './Logout';


export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
                <div>

                    <Navbar bg="dark" variant={"dark"} expand="lg">
                        <Navbar.Brand href="#">E-Masomo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="ms-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to="/educators">Educators</Nav.Link>
                                <Nav.Link as={Link} to="/students">Students</Nav.Link>
                                <Nav.Link as={Link} to="/schools">Schools</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                                

                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </div>
                <div>
                    <Switch>
                        <Route path="/educators">
                            <Educators />
                        </Route>
                        <Route path="/students">
                            <Students/>
                        </Route>
                        <Route path="/schools">
                            <Schools />
                        </Route>
                        <Route path="/logout">
                            <Logout/>
                        </Route>
                    </Switch>
                </div>
    
            </Router>
        )
    }
}
