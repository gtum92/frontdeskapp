import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function ContactInfo({ setNewQuote, newQuote }) {

    function handleInput(e) {
        const { name, value } = e.target
        setNewQuote({ ...newQuote, [name]: value })
    }
    return (
        <>
            <h5>Contact</h5>
            <Row>
                <Col>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        size="sm"
                        name="fullName"
                        value={newQuote.fullName}
                        onChange={handleInput}
                    />
                </Col>
                <Col>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        size="sm"
                        name="phone"
                        type="number"
                        value={newQuote.phone}
                        onChange={handleInput}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ContactInfo
