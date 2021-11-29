import React from 'react'
import { Row, Col } from 'react-bootstrap'
import WorkOrderCards from '../components/workorders/WorkOrderCards'

function WorkordersPage({ workordersList, setWorkordersList }) {

    return (
        <Row>
            <Col className="d-flex align-items-center justify-content-between">
                <h2 className="p-0 m-0">Workorders</h2>
            </Col>
            <hr className="p-0 m-0"></hr>
            <Row className="mt-4">
                <Col>
                    <h5>Pending Arrival</h5>
                    <WorkOrderCards />
                    <hr className="mt-4" />
                </Col>
            </Row>
            <Row className="mt-4 ">
                <Col>
                    <h5>Arrived / Waiting</h5>
                    <WorkOrderCards />
                    <hr className="mt-4" />
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <h5>Garage</h5>
                    <WorkOrderCards />
                    <hr className="mt-4" />
                </Col>
            </Row>

        </Row >
    )
}

export default WorkordersPage
