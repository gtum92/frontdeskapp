import React, { useState, useEffect } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap'
import './estimates-page.css'
import newQuoteInitial from '../data/data'
import database from 'firebase/database'
import EstimatesTable from '../components/EstimatesTable'
import EstimatesSubNav from '../components/EstimatesSubNav'
import NewQuoteModal from '../components/new-quote-form/NewQuoteModal'
import { getDatabase, ref, onValue } from "firebase/database";

function EstimatesPage() {
    const [estimatesList, setEstimatesList] = useState([])
    const [subPage, setSubPage] = useState("pending")
    const [showNewQuoteModal, setNewQuoteModal] = useState(false)
    const [newQuote, setNewQuote] = useState({ ...newQuoteInitial })
    const [edit, setEdit] = useState(false)

    useEffect(() => {
        const db = getDatabase()
        const estimatesListRef = ref(db, 'estimates/');
        onValue(estimatesListRef, (snapshot) => {
            const data = snapshot.val();
            const list = []
            for (let job in data) {
                data[job].id = job
                list.push(data[job])
            }
            setEstimatesList(list)
        });
    }, [])

    function handleNewQuote() {
        setNewQuoteModal(true)
        const date = new Date()
        setNewQuote({ ...newQuote, dateCreated: date })
    }

    function handleEditShow(e) {
        const { id } = e.target
        setNewQuote(estimatesList.filter(item => item.id === id && item)[0])
        setNewQuoteModal(true)
        setEdit(true)
    }

    return (
        <Row>
            <Col className="d-flex align-items-center justify-content-between">
                <h2 className="p-0 m-0">Estimates</h2>
                <EstimatesSubNav setSubPage={setSubPage} subPage={subPage} />
            </Col>
            <hr className="p-0 m-0"></hr>
            <Row className="mt-4">
                <Col className="d-flex align-items-center justify-content-between">
                    <Form.Control className="w-25" placeholder="search quotes" size="sm" />
                    <Button
                        className="border border-dark"
                        variant="white"
                        size="sm"
                        onClick={handleNewQuote}
                    >+ new quote
                    </Button>
                </Col>
            </Row>
            <EstimatesTable
                estimatesList={estimatesList}
                subPage={subPage}
                edit={edit}
                setEdit={setEdit}
                handleEditShow={handleEditShow}
            />
            <NewQuoteModal
                showNewQuoteModal={showNewQuoteModal}
                setNewQuoteModal={setNewQuoteModal}
                newQuote={newQuote}
                setNewQuote={setNewQuote}
                setEstimatesList={setEstimatesList}
                estimatesList={estimatesList}
                edit={edit}
                setEdit={setEdit}
            />

        </Row>
    )
}

export default EstimatesPage
