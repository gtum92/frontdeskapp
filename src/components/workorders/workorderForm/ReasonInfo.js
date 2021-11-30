import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function ReasonInfo({ editWorkorder, setEditWorkorder }) {
    function handleInput(e) {
        const { name, value } = e.target
        setEditWorkorder({ ...editWorkorder, [name]: value })
    }
    return (
        <>
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
                        value={editWorkorder.reason}
                        onChange={handleInput}
                        onFocus={() => editWorkorder.reason === "" && setEditWorkorder({ ...editWorkorder, reason: "- " })}
                        onBlur={() => (editWorkorder.reason === "- " || editWorkorder.reason === "-") && setEditWorkorder({ ...editWorkorder, reason: "" })}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ReasonInfo
