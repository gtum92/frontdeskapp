import React, { useState, useEffect } from 'react'
import { Row, Col, Form } from 'react-bootstrap'
import { getDatabase, ref, onValue } from "firebase/database";
import WorkOrderCards from '../components/workorders/WorkOrderCards'
import EditWorkorderModal from '../components/workorders/workorderForm/EditWorkorderModal';

function WorkordersPage() {

    // const [workordersList, setWorkordersList] = useState([])
    const [pendingWorkorders, setPendingWorkorders] = useState([])
    const [arrivedWorkorders, setArrivedWorkorders] = useState([])
    const [garageWorkorders, setGarageWorkorders] = useState([])


    // When a work order is clicked
    const [edit, setEdit] = useState(false)
    const [editWorkorder, setEditWorkorder] = useState({})

    useEffect(() => {
        const db = getDatabase()
        const workordersListRef = ref(db, 'workorders/');
        onValue(workordersListRef, (snapshot) => {
            const data = snapshot.val();
            const list = []
            for (let job in data) {
                data[job].id = job
                list.push(data[job])
            }
            setPendingWorkorders(list.filter(workorder => workorder.status === "workorder-pending"))
            setArrivedWorkorders(list.filter(workorder => workorder.status === "workorder-arrived"))
            setGarageWorkorders(list.filter(workorder => workorder.status === "workorder-garage"))
        });
    }, [])

    return (
        <>
            {edit && <EditWorkorderModal setEditWorkorder={setEditWorkorder} editWorkorder={editWorkorder} edit={edit} setEdit={setEdit} />}
            <Row>
                <Col className="d-flex align-items-center justify-content-between">
                    <h2 className="p-0 m-0">Workorders</h2>
                </Col>
                <hr className="p-0 m-0"></hr>
                <Form.Control className="w-25 mt-4 ms-2" placeholder="search workorders" size="sm" />

                <Row className="mt-4">
                    <Col>
                        <h5>Pending Arrival</h5>
                        <WorkOrderCards data={pendingWorkorders} setEdit={setEdit} setEditWorkorder={setEditWorkorder} />
                        <hr className="mt-4" />
                    </Col>
                </Row>
                <Row className="mt-4 ">
                    <Col>
                        <h5>Arrived / Waiting</h5>
                        <WorkOrderCards data={arrivedWorkorders} setEdit={setEdit} setEditWorkorder={setEditWorkorder} />
                        <hr className="mt-4" />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h5>Garage</h5>
                        <WorkOrderCards data={garageWorkorders} setEdit={setEdit} setEditWorkorder={setEditWorkorder} />
                        <hr className="mt-4" />
                    </Col>
                </Row>
            </Row >
        </>
    )
}

export default WorkordersPage
