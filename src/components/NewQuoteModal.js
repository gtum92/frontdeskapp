import React, { useState } from 'react'
import { Modal, Button, Form, Row, Col, InputGroup } from 'react-bootstrap'

import newQuoteInitial from '../data/data'

function NewQuoteModal({ showNewQuoteModal, setNewQuoteModal }) {

    const [newQuote, setNewQuote] = useState(newQuoteInitial)

    function handleShowNewQuoteModal() {
        setNewQuoteModal(false)
    }

    function handleInput(e) {
        const { name, value } = e.target
        const { inputType } = e.nativeEvent

        setNewQuote({ ...newQuote, [name]: value })
    }
    console.log(newQuote)
    return (
        <Modal show={showNewQuoteModal}>
            <Modal.Header size="sm">
                <Modal.Title >New Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body className="mt-2">
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
                            value={newQuote.phone}
                            onChange={handleInput}
                        />
                    </Col>
                </Row>
                <h5 className="mt-4">Vehicle</h5>
                <Row className="gx-2">
                    <Col xs={2}>
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            size="sm"
                            name="year"
                            value={newQuote.year}
                            onChange={handleInput}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Make</Form.Label>
                        <Form.Control
                            size="sm"
                            name="make"
                            value={newQuote.make}
                            onChange={handleInput}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Model</Form.Label>
                        <Form.Control
                            size="sm"
                            name="model"
                            value={newQuote.model}
                            onChange={handleInput}
                        />
                    </Col>
                    <Col xs={2}>
                        <Form.Label>Engine</Form.Label>
                        <InputGroup size="sm">
                            <Form.Control
                                size="sm"
                                placeHolder="0.0"
                                name="engine"
                                value={newQuote.engine}
                                onChange={handleInput}
                            />
                            <InputGroup.Text id="basic-addon2">L</InputGroup.Text>
                        </InputGroup>
                    </Col>

                </Row>
                <Row className="mt-2">
                    <Col xs={4}>
                        <Form.Label>Tire Size</Form.Label>
                        <Form.Control
                            size="sm"
                            name="tireSize"
                            value={newQuote.tireSize}
                            onChange={handleInput}
                        />
                    </Col>
                    <Col xs={3}>
                        <Form.Label>Plate</Form.Label>
                        <Form.Control
                            size="sm"
                            name="plate"
                            value={newQuote.plate}
                            onChange={handleInput}
                        />
                    </Col>
                    <Col >
                        <Form.Label>VIN</Form.Label>
                        <Form.Control
                            size="sm"
                            name="vin"
                            value={newQuote.vin}
                            onChange={handleInput}
                        />
                    </Col>
                </Row>
                <h5 className="mt-4">Reason For Visit</h5>
                <Row>
                    <Col>
                        <Form.Label>Seperate reasons by " - "</Form.Label>
                        <Form.Control
                            style={{ overflow: "hidden" }}
                            size="sm"
                            as="textarea"
                            rows={4}
                            placeHolder="- enter a reason"
                            name="reason"
                            value={newQuote.reason}
                            onChange={handleInput}
                            onFocus={() => newQuote.reason === "" && setNewQuote({ ...newQuote, reason: "- " })}
                            onBlur={() => (newQuote.reason === "- " || newQuote.reason === "-") && setNewQuote({ ...newQuote, reason: "" })}
                        />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-between mt-3">
                <Button variant="outline-danger" onClick={handleShowNewQuoteModal}>Cancel</Button>
                <Button variant="dark">Create</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default NewQuoteModal
