import React, { useState, useEffect } from 'react'
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap'


function ServiceInfo({ setNewQuote, newQuote }) {

    const newServiceInitial = { id: "", description: "", price: "" };

    function handleInput(e) {
        const { name, value, id } = e.target
        setNewQuote({
            ...newQuote,
            services: newQuote.services.map(service => service.id == Number(id) ? { ...service, [name]: value } : service)
        })
    }

    function handleAddService() {
        let getServices = newQuote.services
        getServices = [...getServices, newServiceInitial]

        // Set the IDs
        let i;
        for (i = 0; i < getServices.length; i++) {
            getServices[i].id = i
        };
        setNewQuote({ ...newQuote, services: getServices })

    }

    function handleDelService(e) {
        const { id } = e.target
        // Set the IDs
        const getServices = newQuote.services
        let i;
        for (i = 0; i < getServices.length; i++) {
            getServices[i].id = i
        }
        setNewQuote({ ...newQuote, services: newQuote.services.filter(jobs => jobs.id !== Number(id)) })
    }

    useEffect(() => {
        let num = 0;
        newQuote.services.forEach(service => num = Number(service.price) + num)

        setNewQuote({ ...newQuote, total: num })
    }, [newQuote.services])

    return (
        <>
            <Row>
                <Col className="d-flex align-items-center justify-content-between mt-4">
                    <h5 className="">Services</h5>
                    <Button variant="link" size="sm" onClick={handleAddService}>+ add service</Button>
                </Col>
            </Row>
            <Row className="gx-2 mt-3">
                <Col xs={1}>
                    <Form.Label>#</Form.Label>
                </Col>
                <Col>
                    <Form.Label>Service Description</Form.Label>
                </Col>
                <Col xs={3}>
                    <Form.Label>Price</Form.Label>
                </Col>
            </Row>
            {newQuote.services.map((service, index) => {
                return (
                    <>
                        <Row className="gx-2 mb-3">
                            <Col xs={1} className="d-flex align-items-center">
                                <h6 className="p-0 m-0">{index + 1}</h6>
                            </Col>
                            <Col className="">
                                <Form.Control
                                    size="sm"
                                    placeHolder="enter service"
                                    id={index}
                                    name="description"
                                    value={service.description}
                                    onChange={handleInput}
                                />
                                <Form.Control
                                    size="sm"
                                    placeHolder="enter supplier name"
                                    className="w-75 mt-1"
                                    id={index}
                                    name="supplier"
                                    value={service.supplier}
                                    onChange={handleInput}
                                />
                            </Col>
                            <Col xs={3}>
                                <InputGroup size="sm">
                                    <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
                                    <Form.Control
                                        size="sm"
                                        placeHolder="0.00"
                                        id={index}
                                        name="price"
                                        value={service.price}
                                        onChange={handleInput}
                                    />
                                </InputGroup>
                            </Col>
                            {index > 0 &&
                                <Col xs={1}>
                                    <Button size="sm" variant="outline-danger" id={index} onClick={handleDelService}>del</Button>
                                </Col>
                            }
                        </Row>
                    </>
                )
            })}
            <Row className="mb-5 mt-4">
                <Col className="border-top mx-3 d-flex align-items-middle justify-content-between">
                    <strong className="mt-1">Total: </strong>
                    <strong className="mt-1">{`$ ${parseFloat(newQuote.total).toFixed(2)}`}</strong>
                </Col>
            </Row>
        </>
    )
}

export default ServiceInfo
