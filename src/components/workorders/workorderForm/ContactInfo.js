import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function ContactInfo({ editWorkorder, setEditWorkorder }) {

    function handleInput(e) {
        const { name, value } = e.target
        setEditWorkorder({ ...editWorkorder, [name]: value })
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
                        value={editWorkorder.fullName}
                        onChange={handleInput}
                    />
                </Col>
                <Col>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        size="sm"
                        name="phone"
                        type="number"
                        value={editWorkorder.phone}
                        onChange={handleInput}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ContactInfo
