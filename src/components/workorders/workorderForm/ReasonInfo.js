import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function ReasonInfo({ editWorkorder, setEditWorkorder }) {
    function handleInput(e) {
        const { name, value } = e.target
        setEditWorkorder({ ...editWorkorder, [name]: value })
    }
    return (
        <>
            <h5 className="mt-4">Notes</h5>
            <Row>
                <Col>
                    <Form.Label>Seperate notes by " - "</Form.Label>
                    <Form.Control
                        style={{ overflow: "hidden" }}
                        size="sm"
                        as="textarea"
                        rows={4}
                        placeHolder="- enter a note"
                        name="notes"
                        value={editWorkorder.notes}
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
