import React from 'react'
import { Row, Col, Button, ButtonGroup, Form } from 'react-bootstrap'

function PaymentInfo({ invoice, handlePayment }) {
    return (
        <Row className="mb-3">
            <Col xs={4} className="d-flex align-items-center">
                <Form.Label className="m-0">Payment Type</Form.Label>
            </Col>
            <Col className="d-flex align-items-center">
                <ButtonGroup size="sm">
                    <Button
                        size="sm"
                        name="payment"
                        value="cash"
                        active={invoice.payment === "cash"}
                        variant="outline-dark"
                        onClick={handlePayment}
                    >Cash
                    </Button>
                    <Button
                        size="sm"
                        name="payment"
                        value="credit"
                        active={invoice.payment === "credit"}
                        variant="outline-dark"
                        onClick={handlePayment}
                    >Credit
                    </Button>
                    <Button
                        size="sm"
                        name="payment"
                        value="split"
                        active={invoice.payment === "split"}
                        variant="outline-dark"
                        onClick={handlePayment}
                    >Split
                    </Button>
                </ButtonGroup>
            </Col>
        </Row>
    )
}

export default PaymentInfo
