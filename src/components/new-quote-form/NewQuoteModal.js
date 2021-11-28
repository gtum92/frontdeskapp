import React from 'react'
import { Modal, Button, CloseButton } from 'react-bootstrap'

import newQuoteInitial from '../../data/data'
import ContactInfo from './ContactInfo'
import ReasonInfo from './ReasonInfo'
import ServiceInfo from './ServiceInfo'
import VehicleInfo from './VehicleInfo'

function NewQuoteModal({ showNewQuoteModal, setNewQuoteModal, setNewQuote, newQuote, setEstimatesList, estimatesList, edit, setEdit }) {

    function handleShowNewQuoteModal() {
        setNewQuoteModal(false)
        setNewQuote(newQuoteInitial)
        setEdit(false)
    }

    function handleCreateEstimate() {
        setEstimatesList([...estimatesList, newQuote])
        handleShowNewQuoteModal()
    }

    function handleFollowUpClick() {
        setEstimatesList(estimatesList.map(estimate => estimate.id === newQuote.id ? { ...estimate, status: "ready" } : { ...newQuote, status: "ready" }))
        handleShowNewQuoteModal()
    }

    function handleEditEstimateSave() {
        setEstimatesList(estimatesList.map(estimate => estimate.id === newQuote.id ? newQuote : estimate))
        handleShowNewQuoteModal()
    }

    function handleEstimateDel() {
        setEstimatesList(estimatesList.filter(estimate => estimate.id !== newQuote.id))
        handleShowNewQuoteModal()
    }

    console.log(newQuote)
    return (
        <Modal show={showNewQuoteModal}>
            <Modal.Header size="sm">
                <Modal.Title >{edit ? "Edit " : "New "} Quote</Modal.Title>
                {edit && <Button variant="link" className="text-danger" onClick={handleEstimateDel}>delete</Button>}
            </Modal.Header>
            <Modal.Body className="mt-2">
                <ContactInfo newQuote={newQuote} setNewQuote={setNewQuote} />
                <VehicleInfo newQuote={newQuote} setNewQuote={setNewQuote} />
                <ReasonInfo newQuote={newQuote} setNewQuote={setNewQuote} />
                <ServiceInfo newQuote={newQuote} setNewQuote={setNewQuote} />
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-between">
                <Button variant="outline-danger" onClick={handleShowNewQuoteModal}>Cancel</Button>
                {newQuote.total > 0 && newQuote.status != "ready" && <Button variant="outline-dark" onClick={handleFollowUpClick}>Ready for Follow Up</Button>}
                {!edit && <Button variant="dark" onClick={handleCreateEstimate}>Create</Button>}
                {newQuote.status === "ready" && <Button variant="outline-dark">Quote Accepted</Button>}
                {edit && <Button variant="dark" onClick={handleEditEstimateSave}>Save</Button>}
            </Modal.Footer>
        </Modal >
    )
}

export default NewQuoteModal
