import React from 'react'
import { Row, Col, Form } from 'react-bootstrap'

function ReasonInfo({ setNewQuote, newQuote }) {
    function handleInput(e) {
        const { name, value } = e.target
        setNewQuote({ ...newQuote, [name]: value })
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
                        value={newQuote.reason}
                        onChange={handleInput}
                        onFocus={() => newQuote.reason === "" && setNewQuote({ ...newQuote, reason: "- " })}
                        onBlur={() => (newQuote.reason === "- " || newQuote.reason === "-") && setNewQuote({ ...newQuote, reason: "" })}
                    />
                </Col>
            </Row>
        </>
    )
}

export default ReasonInfo
