import React, { useEffect, useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { getDatabase, ref, set, onValue } from "firebase/database";
import ContactInfo from './ContactInfo';
import VehicleInfo from './VehicleInfo';
import InvoiceInfo from './InvoiceInfo';
import PaymentInfo from './PaymentInfo';
import TotalDueInfo from './TotalDueInfo';
import RecievedMoney from './RecievedMoney';

function PaymentModal({ setInvoice, invoice, getPay, setGetPay }) {

    const [diff, setDiff] = useState(0);

    useEffect(() => {
        if (getPay === true && invoice != "") {
            if (invoice.payment === "credit" || invoice.payment === "split" || invoice.invoice == "true") {
                const db = getDatabase()
                const invoicesListRef = ref(db, 'invoices/');
                onValue(invoicesListRef, (snapshot) => {
                    const data = snapshot.val();
                    const list = []
                    for (let job in data) {
                        if (data[job].id === invoice.id) {
                            data[job].id = job
                            list.push(data[job])
                        }
                    }
                    if (list.length > 0) {
                        setInvoice({ ...invoice, total: parseFloat(Number(list[0].total) * 1.13).toFixed(2) })
                        setDiff(parseFloat(((Number(list[0].total) * 1.13) - Number(invoice.cash) - Number(invoice.credit))).toFixed(2))
                    }

                })
            } else {
                const db = getDatabase()
                const invoicesListRef = ref(db, 'invoices/');
                onValue(invoicesListRef, (snapshot) => {
                    const data = snapshot.val();
                    const list = []
                    for (let job in data) {
                        if (data[job].id === invoice.id) {
                            data[job].id = job
                            list.push(data[job])
                        }
                    }
                    if (list.length > 0) {
                        setInvoice({ ...invoice, total: Number(list[0].total) })
                        setDiff(parseFloat((Number(list[0].total) - Number(invoice.cash) - Number(invoice.credit))).toFixed(2))
                    }
                })
            }
        }

    }, [invoice.payment, invoice.invoice, invoice.cash, invoice.credit])


    function handlePayment(e) {
        const { name, value } = e.target
        if (name === "invoice" || name === "payment") {
            setInvoice({ ...invoice, [name]: value, cash: 0, credit: 0 })
        } else {
            setInvoice({ ...invoice, [name]: value })
        }
    }

    function handlePay(e) {
        const db = getDatabase()
        const date = new Date()
        set(ref(db, 'invoices/' + invoice.id), { ...invoice, status: "invoice-paid", datePaid: date.toString(), difference: diff })
        setInvoice("")
        setGetPay(false)
    }

    function handleClose(e) {
        setInvoice("")
        setGetPay(false)
    }

    return (
        <Modal show={getPay}>
            <Modal.Header className="bg-light">
                <Modal.Title>Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ContactInfo invoice={invoice} />
                <VehicleInfo invoice={invoice} />
                <InvoiceInfo invoice={invoice} handlePayment={handlePayment} />
                <PaymentInfo invoice={invoice} handlePayment={handlePayment} />
                <TotalDueInfo invoice={invoice} />
                <hr className="my-3 mb-4" />
                <RecievedMoney invoice={invoice} setInvoice={setInvoice} handlePayment={handlePayment} diff={diff} />
            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <Button size="sm" onClick={handleClose} variant="outline-dark">Cancel</Button>
                <Button size="sm" variant="dark" onClick={handlePay}>Receive Payment</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PaymentModal
