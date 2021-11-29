import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import newQuoteInitial from '../../data/data'
import ContactInfo from './ContactInfo'
import ReasonInfo from './ReasonInfo'
import ServiceInfo from './ServiceInfo'
import VehicleInfo from './VehicleInfo'

// database
import { getDatabase, ref, push, set, update } from "firebase/database";

function NewQuoteModal(
    {
        showNewQuoteModal, setNewQuoteModal, setNewQuote, newQuote, setEstimatesList,
        estimatesList, edit, setEdit, setDeclinedList, declinedList, setWorkordersList, workordersList
    }
) {

    function handleShowNewQuoteModal() {
        setNewQuoteModal(false)
        setNewQuote(newQuoteInitial)
        setEdit(false)
    }

    function handleCreateEstimate() {
        const database = getDatabase()
        push(ref(database, "estimates/"), newQuote)
        handleShowNewQuoteModal()
    }

    function handleFollowUpClick() {
        const db = getDatabase()
        const estimateRef = ref(db, 'estimates/' + newQuote.id)
        if (edit) {
            update(estimateRef, { ...newQuote, status: "ready" })
        } else {
            push(ref(db, "estimates/"), { ...newQuote, status: "ready" })
        }
        handleShowNewQuoteModal()
    }

    function handleEditEstimateSave() {
        const db = getDatabase()
        const estimateRef = ref(db, 'estimates/' + newQuote.id)
        update(estimateRef, newQuote)
        handleShowNewQuoteModal()
    }

    function handleEstimateDel(e) {
        const db = getDatabase()
        const estimateRef = ref(db, 'estimates/' + newQuote.id)
        set(estimateRef, null)
        const date = new Date()
        set(ref(db, 'deleted/' + newQuote.id), { ...newQuote, status: e.target.name, dateDeleted: date })
        handleShowNewQuoteModal()
    }

    function handleNewWorkorder() {
        setEstimatesList(estimatesList.filter(estimate => estimate.id !== newQuote.id))
        setWorkordersList([...workordersList, { ...newQuote, status: "workorder-pending" }])
    }

    return (
        <Modal show={showNewQuoteModal}>
            <Modal.Header size="sm">
                <Modal.Title >{edit ? "Edit " : "New "} Quote</Modal.Title>
                {edit && <Button variant="link" className="text-danger" name="deleted" onClick={handleEstimateDel}>delete</Button>}
            </Modal.Header>
            <Modal.Body className="mt-2">
                <ContactInfo newQuote={newQuote} setNewQuote={setNewQuote} />
                <VehicleInfo newQuote={newQuote} setNewQuote={setNewQuote} />
                <ReasonInfo newQuote={newQuote} setNewQuote={setNewQuote} />
                <ServiceInfo newQuote={newQuote} setNewQuote={setNewQuote} />
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-between">
                <Button variant="outline-secondary" onClick={handleShowNewQuoteModal}>Cancel</Button>
                {newQuote.total > 0 && newQuote.status !== "ready" && <Button variant="outline-dark" onClick={handleFollowUpClick}>Ready for Follow Up</Button>}
                {!edit && <Button variant="dark" onClick={handleCreateEstimate}>Create</Button>}
                {newQuote.status === "ready" && <Button variant="outline-danger" name="rejected" onClick={handleEstimateDel}>Rejected</Button>}
                {newQuote.status === "ready" && <Button variant="outline-primary">Create Work Order</Button>}
                {edit && <Button variant="dark" onClick={handleEditEstimateSave}>Save</Button>}
            </Modal.Footer>
        </Modal >
    )
}

export default NewQuoteModal
