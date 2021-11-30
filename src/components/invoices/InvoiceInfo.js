import React from 'react'
import { Row, Col, Button, ButtonGroup, Form } from 'react-bootstrap'
function InvoiceInfo({ invoice, handlePayment }) {
    return (
        <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center">
                <Form.Label className="m-0">Invoice</Form.Label>
            </Col>
            <Col className="d-flex align-items-center">
                <ButtonGroup size="sm">
                    <Button
                        size="sm"
                        name="invoice"
                        className="px-3"
                        value={"false"}
                        active={invoice.invoice == "false"}
                        variant="outline-dark"
                        onClick={handlePayment}
                    >No
                    </Button>
                    <Button
                        size="sm"
                        className="px-3"
                        name="invoice"
                        value={"true"}
                        active={invoice.invoice == "true"}
                        variant="outline-dark"
                        onClick={handlePayment}
                    >Yes
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}

export default InvoiceInfo
