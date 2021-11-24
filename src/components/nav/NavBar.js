import React from 'react'
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap'

function NavBar() {
    return (
        <Navbar bg="light" className="border-bottom">
            <Container fluid className="">
                <Row className="  w-100">
                    <Col className="d-flex align-items-center">
                        <Navbar.Brand>VEERPREET OPS</Navbar.Brand>
                    </Col>
                    <Col className="d-flex align-items-center justify-content-center">
                        <Nav.Item><Nav.Link>Estimates</Nav.Link></Nav.Item>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Navbar >
    )
}

export default NavBar
