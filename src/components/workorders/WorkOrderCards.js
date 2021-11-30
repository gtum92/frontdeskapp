import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


function WorkOrderCards({ data, setEdit, setEditWorkorder }) {

    function handleClick(id) {
        setEditWorkorder(data.filter(workorder => workorder.id == id)[0])
        setEdit(true)
    }

    return (
        <>
            {
                data.map((item, index) => {
                    console.log(item.id)
                    return (
                        <Card key={index} className="m-3 py-2 px-3 border-dark" onClick={() => handleClick(item.id)} style={{ cursor: "pointer" }}>
                            <Row>
                                <Col xs={3}>
                                    <small className="text-secondary">CONTACT</small>
                                    <h6 className="text-nowrap mb-1">{item.fullName}</h6>
                                    <h6 className="text-nowrap">{item.phone}</h6>
                                </Col>
                                <Col xs={3}>
                                    <small className="text-secondary">VEHICLE</small>
                                    <h6 className=" mb-1">{item.year} {item.make} {item.model} {item.engine} L</h6>
                                    <h6 className="text-nowrap">{item.plate} </h6>
                                </Col>
                                <Col xs={4}>
                                    <small className="text-secondary">SERVICES</small>
                                    <ol className="px-3">
                                        {item.services.map(service => {
                                            return (
                                                <li>{service.description}</li>
                                            )
                                        })}
                                    </ol>
                                </Col>
                                <Col xs={2}>
                                    <small className="text-secondary">ACCEPTED</small>
                                    <h6 className="text-nowrap mb-1">{new Date(item.dateAccepted).toLocaleDateString()} </h6>
                                </Col>
                            </Row>
                        </Card>
                    )
                })}
        </>
    )


}

export default WorkOrderCards
