import React from 'react'
import { Modal, Col, Row, Button, ButtonGroup, Form, InputGroup } from 'react-bootstrap'
import { getDatabase, ref, set } from "firebase/database";
import ContactInfo from './ContactInfo';
import VehicleInfo from './VehicleInfo';
import InvoiceInfo from './InvoiceInfo';

function PaymentModal({ setInvoice, invoice, getPay, setGetPay }) {

    function handlePayment(e) {
        const { name, value } = e.target
        setInvoice({ ...invoice, [name]: value })
        console.log(e.target.name)
    }

    function handlePay(e) {
        const db = getDatabase()
        const date = new Date()
        set(ref(db, 'invoices/' + invoice.id), { ...invoice, status: "invoice-paid", datePaid: date.toString() })
        setInvoice({})
        setGetPay(false)
    }

    function handleClose(e) {
        const db = getDatabase()
        // set(ref(db, 'invoices/' + invoice.id), { ...invoice, payment: "", cash: 0, credit: 0, invoice: "" })
        setInvoice({})
        setGetPay(false)
    }
    return (
        <Modal show={getPay}>
            <Modal.Header>
                <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactInfo invoice={invoice} />
                <VehicleInfo invoice={invoice} />
                <InvoiceInfo invoice={invoice} handlePayment={handlePayment} />
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
                <hr className="my-3 mb-4" />
                <Row className="mb-3">
                    <Col xs={4} className="d-flex align-items-center">
                        <Form.Label className="m-0">Cash Recieved</Form.Label>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <InputGroup size="sm" className="w-50">
                            <InputGroup.Text >$</InputGroup.Text>
                            <Form.Control name="cash" value={invoice.cash} placeHolder="enter cash" />
                        </InputGroup>
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col xs={4} className="d-flex align-items-center">
                        <Form.Label className="m-0">Credit Recieved</Form.Label>
                    </Col>
                    <Col className="d-flex align-items-center">
                        <InputGroup size="sm" className="w-50">
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control name="credit" value={invoice.credit} placeHolder="enter credit" />
                        </InputGroup>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button size="sm" onClick={handleClose} variant="outline-dark">Cancel</Button>
                <Button size="sm" variant="dark">Payment</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PaymentModal
