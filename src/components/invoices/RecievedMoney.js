import React from 'react'
import { Row, Col, InputGroup, Form } from 'react-bootstrap'

function RecievedMoney({ setInvoice, invoice, handlePayment, diff }) {


    return (
        <>
            {(invoice.payment === "cash" || invoice.payment === "split") &&
                <Row className="mb-3">
                    <Col xs={4} className="d-flex align-items-center">
                        <Form.Label className="m-0">Cash Received</Form.Label>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <InputGroup size="sm" className="w-50">
                            <InputGroup.Text >$</InputGroup.Text>
                            <Form.Control
                                name="cash"
                                value={invoice.cash == 0 ? "" : invoice.cash}
                                type="number"
                                onChange={handlePayment}
                                placeHolder="enter cash"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            }
            {(invoice.payment === "credit" || invoice.payment === "split") &&
                <Row className="mb-3">
                    <Col xs={4} className="d-flex align-items-center">
                        <Form.Label className="m-0">Credit Received</Form.Label>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <InputGroup size="sm" className="w-50">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control
                                name="credit"
                                type="number"
                                value={invoice.credit == 0 ? "" : invoice.credit}
                                onChange={handlePayment}
                                placeHolder="enter credit"
                            />
                        </InputGroup>
                    </Col>
                </Row>
            }
            <Row className="mb-3">
                <Col xs={4} className="d-flex align-items-center">
                    <Form.Label className="m-0">Difference</Form.Label>
                </Col>
                <Col className="d-flex align-items-center">
                    <InputGroup size="sm" className={`w-50`}>
                        <InputGroup.Text>$</InputGroup.Text>
                        <Form.Control disabled value={diff}
                            className={`${diff != 0 ? "text-danger" : "text-success"}`}
                        />
                    </InputGroup>
                </Col>
            </Row>
        </>
    )
}

export default RecievedMoney
