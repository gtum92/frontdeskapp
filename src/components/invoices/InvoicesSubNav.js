import React from 'react'
import { Nav } from 'react-bootstrap'

function InvoicesSubNav({ subNav, setSubNav }) {

    function handleSubPage(name) {
        setSubNav(name)
    }

    return (
        <Nav>
            <Nav.Item >
                <Nav.Link
                    name="unpaid"
                    className={` ${subNav === "unpaid" ? "subnav-active text-dark" : "text-secondary"}`}
                    onClick={() => handleSubPage("unpaid")}
                >Not Paid</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    name="paid"
                    className={`${subNav === "paid" ? "subnav-active text-dark" : "text-secondary"}`}
                    onClick={() => handleSubPage("paid")}
                >Paid
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    name="paid"
                    className={`${subNav === "onAccount" ? "subnav-active text-dark" : "text-secondary"}`}
                    onClick={() => handleSubPage("onAccount")}
                >Account
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default InvoicesSubNav
