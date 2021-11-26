import React from 'react'
import { Modal, Button, Form, Row, Col } from 'react-bootstrap'

function NewQuoteModal({ showNewQuoteModal, setNewQuoteModal }) {

    function handleShowNewQuoteModal() {
        setNewQuoteModal(false)
    }

    return (
        <Modal show={showNewQuoteModal}>
            <Modal.Header size="sm">
                <Modal.Title >New Quote</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control size="sm" />
                    </Col>
                    <Col>
                        <Form.Label>Phone</Form.Label>
                        <Form.Control size="sm" />
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col xs={2}>
                        <Form.Label>Year</Form.Label>
                        <Form.Control size="sm" />
                    </Col>
                    <Col>
                        <Form.Label>Make</Form.Label>
                        <Form.Control size="sm" />
                    </Col>
                    <Col>
                        <Form.Label>Model</Form.Label>
                        <Form.Control size="sm" />
                    </Col>
                    <Col>
                        <Form.Label>Engine</Form.Label>
                        <Form.Control size="sm" />
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-between">
                <Button variant="outline-danger" onClick={handleShowNewQuoteModal}>Cancel</Button>
                <Button variant="dark">Create</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewQuoteModal
