import React from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'
import "./pending-table.css"

function PendingTable() {
    return (
        <Row>
            <Col className="my-4">
                <Table size="sm" striped>
                    <thead>
                        <tr>
                            <th>Contact</th>
                            <th>Vehicle</th>
                            <th>Plate</th>
                            <th>Requests</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="align-middle">
                            <td>
                                <ul>
                                    <li>John Doe</li>
                                    <li>{"(905) 673-1239"}</li>
                                </ul>
                            </td>
                            <td>
                                <ul>
                                    <li>2012 Honda Civic</li>
                                    <li>1.8L EX</li>
                                </ul>
                            </td>
                            <td>ABCD123</td>
                            <td>
                                <ul>
                                    <li>Oil Change</li>
                                    <li>Tire Change</li>
                                    <li>Brakes - All 4</li>
                                </ul>
                            </td>
                            <td >
                                <Button variant="link" size="sm" className="m-0 p-0">edit</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>

    )
}

export default PendingTable
