import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';

function VehicleInfo({ invoice }) {
    return (
        <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center">
                <Form.Label className="m-0">Vehicle</Form.Label>
            </Col>
            <Col>
                <p className="lead m-0">{invoice.year} {invoice.make} {invoice.model}</p>
                <p className="m-0">{invoice.plate}</p>
            </Col>
        </Row>
    )
}

export default VehicleInfo
