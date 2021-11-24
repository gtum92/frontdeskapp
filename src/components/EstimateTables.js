import React from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'

function EstimateTables({ title }) {
    return (
        <Row>
            <Col>
                <h1>{title}</h1>
                <Row>
                    <Col className="mx-2">
                        <Table size="sm" className="mt-3 ">
                            <thead>
                                <tr>
                                    <th>Vehicle</th>
                                    <th>Contact</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="align-middle">
                                    <td>2012 Honda Civic</td>
                                    <td>
                                        <ul style={{ listStyle: "none" }} className="p-0 m-0">
                                            <li >John Doe</li>
                                            <li>(905) 673-1239</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul style={{ listStyle: "none" }} className="p-0 m-0">
                                            <li>Oil Change Regular</li>
                                            <li>Brakes Front</li>
                                            <li>Windshield Washer Resivor</li>
                                        </ul>
                                    </td>
                                    <td className="p-0 m-0"><Button variant="link">edit</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

            </Col>
        </Row>
    )
}

export default EstimateTables
