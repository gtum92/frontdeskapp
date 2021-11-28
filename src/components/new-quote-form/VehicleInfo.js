import React from 'react'
import { Row, Col, Form, InputGroup } from 'react-bootstrap'

function VehicleInfo({ setNewQuote, newQuote }) {
    function handleInput(e) {
        const { name, value } = e.target
        setNewQuote({ ...newQuote, [name]: value })
    }
    return (
        <>
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
        </>
    )
}

export default VehicleInfo
