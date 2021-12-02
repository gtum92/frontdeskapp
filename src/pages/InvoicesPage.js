import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import InvoicesTable from '../components/invoices/InvoicesTable'
import InvoicesSubNav from '../components/invoices/InvoicesSubNav'

import PaymentModal from '../components/invoices/PaymentModal';
import PaidTable from '../components/invoices/PaidTable';

function InvoicesPage() {

    const [subNav, setSubNav] = useState("unpaid")
    const [getPay, setGetPay] = useState(false)
    const [invoice, setInvoice] = useState("")

    const [edit, setEdit] = useState(false)


    return (
        <>
            {getPay && <PaymentModal setInvoice={setInvoice} invoice={invoice} getPay={getPay} setGetPay={setGetPay} />}
            <Row>
                <Col className="d-flex align-items-center justify-content-between">
                    <h2 className="p-0 m-0">Invoices</h2>
                    <InvoicesSubNav setSubNav={setSubNav} subNav={subNav} />
                </Col>
                <hr></hr>
                <Col className="mx-3">
                    {subNav === "unpaid" && <InvoicesTable subNav={subNav} setGetPay={setGetPay} setInvoice={setInvoice} invoice={invoice} />}
                    {subNav === 'paid' && <PaidTable subNav={subNav} />}
                </Col>
            </Row>
        </>

    )
}
export default InvoicesPage
