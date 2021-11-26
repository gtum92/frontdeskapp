import React, { useState } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import './estimates-page.css'

import PendingTable from '../components/PendingTable'
import EstimatesSubNav from '../components/EstimatesSubNav'
import NewQuoteModal from '../components/NewQuoteModal'

function EstimatesPage() {

    const [subPage, setSubPage] = useState("pending")
    const [showNewQuoteModal, setNewQuoteModal] = useState(false)

    function handleNewQuote() {
        setNewQuoteModal(true)
    }

    return (
        <Row>
            <Col className="d-flex align-items-center justify-content-between">
                <h2 className="p-0 m-0">Estimates</h2>
                <EstimatesSubNav setSubPage={setSubPage} subPage={subPage} />
            </Col>
            <hr className="p-0 m-0"></hr>
            {subPage === "pending" &&
                <>
                    <Row className="mt-4">
                        <Col className="d-flex align-items-center justify-content-between">
                            <Form.Control className="w-25" placeholder="search quotes" size="sm" />
                            <Button
                                className="border border-dark"
                                variant="white"
                                size="sm"
                                onClick={handleNewQuote}
                            >+ new quote</Button>
                        </Col>
                    </Row>
                    <PendingTable />
                    <NewQuoteModal showNewQuoteModal={showNewQuoteModal} setNewQuoteModal={setNewQuoteModal} />
                </>
            }
        </Row>
    )
}

export default EstimatesPage
