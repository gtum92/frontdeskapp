import React from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'
import { Link, useLocation } from "react-router-dom";


function NavBar() {

    let location = useLocation().pathname
    return (
        <Navbar bg="light" className="border-bottom">
            <Container fluid className="">
                <Row className="  w-100">
                    <Col className="d-flex align-items-center">
                        <Navbar.Brand>VEERPREET OPS</Navbar.Brand>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Nav>
                            <Nav.Item className={`${location === "/estimates" && "border rounded"} px-2 `}>
                                <Nav.Link active={location === "/estimates" && true} as={Link} to="/estimates">Estimates</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className={`${location === "/workorders" && "border rounded"} px-2 `}>
                                <Nav.Link active={location === "/workorders" && true} as={Link} to="/workorders">Workorders</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Navbar >
    )
}

export default NavBar
