import React from 'react'
import { Modal, Button } from 'react-bootstrap'

import ContactInfo from './ContactInfo'
import ReasonInfo from './ReasonInfo'
import ServiceInfo from './ServiceInfo'
import VehicleInfo from './VehicleInfo'

// database
import { getDatabase, ref, set, update } from "firebase/database";

function EditWorkorderModal({ editWorkorder, setEditWorkorder, edit, setEdit }) {

    function handleShow() {
        setEdit(false)
        setEditWorkorder({})
    }


    function handleEditWorkorderSave() {
        const db = getDatabase()
        const workorderRef = ref(db, 'workorders/' + editWorkorder.id)
        update(workorderRef, editWorkorder)
        handleShow()

    }

    function handleDel(e) {
        const db = getDatabase()
        const workordersRef = ref(db, 'workorders/' + editWorkorder.id)
        set(workordersRef, null)
        const date = new Date()
        set(ref(db, 'deleted/' + editWorkorder.id), { ...editWorkorder, status: e.target.name, dateDeleted: date.toString() })
        handleShow()
    }

    function handleMove(e) {
        const db = getDatabase()
        const date = new Date()
        set(ref(db, 'workorders/' + editWorkorder.id), { ...editWorkorder, status: e.target.name, dateArrived: date.toString() })
        handleShow()
    }

    function handleInvoice(e) {
        const db = getDatabase()
        const workordersRef = ref(db, 'workorders/' + editWorkorder.id)
        set(workordersRef, null)
        const date = new Date()
        set(ref(db, 'invoices/' + editWorkorder.id), { ...editWorkorder, status: e.target.name, dateFinished: date.toString() })
        handleShow()
    }

    return (
        <Modal show={edit}>
            <Modal.Header size="sm">
                <Modal.Title >Edit Workorder</Modal.Title>
                <div>
                    {
                        editWorkorder.status === "workorder-pending"
                            ? <Button className="mx-1" size="sm" variant="outline-success" name="workorder-arrived" onClick={handleMove}>Arrived</Button>
                            : editWorkorder.status === "workorder-arrived"
                                ?
                                <>
                                    <Button className="mx-1" size="sm" variant="outline-danger" name="workorder-pending" onClick={handleMove}>Move to Pending</Button>
                                    <Button className="mx-1" size="sm" variant="outline-success" name="workorder-garage" onClick={handleMove}>Garage</Button>
                                </>
                                : editWorkorder.status === "workorder-garage"
                                &&
                                <>
                                    <Button className="mx-1" size="sm" variant="outline-danger" name="workorder-arrived" onClick={handleMove}>Move to Arrived</Button>
                                    <Button className="mx-1" size="sm" variant="outline-dark" name="invoice-unpaid" onClick={handleInvoice}>Create Invoice</Button>
                                </>

                    }
                </div>
            </Modal.Header>
            <Modal.Body className="mt-2">
                <ContactInfo editWorkorder={editWorkorder} setEditWorkorder={setEditWorkorder} />
                <VehicleInfo editWorkorder={editWorkorder} setEditWorkorder={setEditWorkorder} />
                <ReasonInfo editWorkorder={editWorkorder} setEditWorkorder={setEditWorkorder} />
                <ServiceInfo editWorkorder={editWorkorder} setEditWorkorder={setEditWorkorder} />
            </Modal.Body>
            <Modal.Footer className="d-flex align-items-center justify-content-between">
                <Button variant="secondary" onClick={handleShow}>Cancel</Button>
                <Button variant="link" className="text-danger" name="deleted" onClick={handleDel}>delete</Button>
                <Button variant="dark" onClick={handleEditWorkorderSave}>Save</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default EditWorkorderModal
