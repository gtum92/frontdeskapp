import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'


function WorkOrderCards() {
    return (
        <Card className="m-3 py-2 px-3 border-dark" onClick={() => alert("hello")} style={{ cursor: "pointer" }}>
            <Row>
                <Col xs={3}>
                    <small className="text-secondary">CONTACT</small>
                    <h6 className="text-nowrap mb-1">Gurveer Tumbar</h6>
                    <h6 className="text-nowrap">(905) 673-1239)</h6>
                </Col>
                <Col xs={3}>
                    <small className="text-secondary">VEHICLE</small>
                    <h6 className=" mb-1">2012 Honda Civic 1.8L </h6>
                    <h6 className="text-nowrap">ABDC123 </h6>
                </Col>
                <Col xs={4}>
                    <small className="text-secondary">SERVICES</small>
                    <ol className="px-3">
                        <li>Oil Change Synthetic</li>
                        <li>Tire Change</li>
                    </ol>
                </Col>
                <Col xs={2}>
                    <small className="text-secondary">ACCEPTED</small>
                    <h6 className="text-nowrap mb-1">Nov. 31 </h6>
                </Col>
            </Row>
        </Card>
    )
}

export default WorkOrderCards
