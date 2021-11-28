import React from 'react'
import { Nav } from 'react-bootstrap';

function EstimatesSubNav({ subPage, setSubPage }) {

    function handleSubPage(e) {
        const { name } = e.target;
        setSubPage(name)
    }

    return (
        <Nav>
            <Nav.Item >
                <Nav.Link
                    name="pending"
                    className={`${subPage === "pending" ? "subnav-active" : "text-secondary"}`}
                    onClick={handleSubPage}
                >Pending</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    name="ready"
                    className={`${subPage === "ready" ? "subnav-active" : "text-secondary"}`}
                    onClick={handleSubPage}
                >Ready for Follow Up
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default EstimatesSubNav
