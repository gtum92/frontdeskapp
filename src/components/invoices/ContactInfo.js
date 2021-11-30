import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function ContactInfo({ invoice }) {
    return (
        <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center">
                <Form.Label className="m-0">Contact</Form.Label>
            </Col>
            <Col>
                <p className="lead m-0">{invoice.fullName}</p>
                <p className="m-0">{invoice.phone}</p>
            </Col>
        </Row>
    )
}

export default ContactInfo
