import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function TotalDueInfo({ invoice }) {


    return (
        <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center">
                <Form.Label className="m-0">Total Due</Form.Label>
            </Col>
            <Col className="d-flex align-items-center">
                <h5
                    className="border p-2 w-50 text-center rounded border-dark bg-light"
                >{"$ " + parseFloat(invoice.total).toFixed(2)}
                </h5>
            </Col>
        </Row>
    )
}

export default TotalDueInfo
