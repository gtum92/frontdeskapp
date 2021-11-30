import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import InvoicesTable from '../components/invoices/InvoicesTable'
import InvoicesSubNav from '../components/invoices/InvoicesSubNav'

import PaymentModal from '../components/invoices/PaymentModal';

function InvoicesPage() {

    const [subNav, setSubNav] = useState("unpaid")
    const [getPay, setGetPay] = useState(false)
    const [invoice, setInvoice] = useState({})




    console.log(invoice)
    return (
        <>
            <PaymentModal setInvoice={setInvoice} invoice={invoice} getPay={getPay} setGetPay={setGetPay} />
            <Row>
                <Col className="d-flex align-items-center justify-content-between">
                    <h2 className="p-0 m-0">Invoices</h2>
                    <InvoicesSubNav setSubNav={setSubNav} subNav={subNav} />
                </Col>
                <hr></hr>
                <Col className="mx-3">
                    <InvoicesTable subNav={subNav} setGetPay={setGetPay} setInvoice={setInvoice} />
                </Col>
            </Row>
        </>

    )
}
export default InvoicesPage
