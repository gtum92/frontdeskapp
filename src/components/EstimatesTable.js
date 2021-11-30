import React from 'react'
import { Col, Row, Table, Button } from 'react-bootstrap'
import "./pending-table.css"

function EstimatesTable({ estimatesList, subPage, handleEditShow }) {

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
                            <th>Services</th>
                            <th>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {estimatesList.map((estimates, index) => {
                            if (estimates.status === subPage) {
                                return (
                                    <tr key={index} className="align-middle">
                                        <td>
                                            <ul>
                                                <li>{estimates.fullName}</li>
                                                <li>{estimates.phone}</li>
                                            </ul>
                                        </td>
                                        <td>
                                            <ul>
                                                <li>{estimates.year} {estimates.make} {estimates.model}</li>
                                                <li>{estimates.engine}</li>
                                            </ul>
                                        </td>
                                        <td>{estimates.plate}</td>
                                        <td>{estimates.reason}</td>
                                        <td>
                                            <ol>
                                                {estimates.services.map(service => {
                                                    return (
                                                        <li>{service.description} {service.price > 0 && "- " + "$" + service.price} </li>
                                                    )
                                                })}
                                            </ol>
                                        </td>
                                        <td><strong>$ {estimates.total}</strong></td>
                                        <td>
                                            <Button
                                                variant="link"
                                                size="sm"
                                                className="p-0 text-dark"
                                                onClick={handleEditShow}
                                                id={estimates.id}
                                            >edit</Button>
                                        </td>
                                    </tr>
                                )
                            }

                        })}
                    </tbody>
                </Table>
            </Col>
        </Row>

    )
}

export default EstimatesTable
