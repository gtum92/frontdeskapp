import React, { useState, useEffect } from 'react'
import { Button, Table, Card } from 'react-bootstrap'
import { getDatabase, ref, onValue, set } from "firebase/database";

function InvoicesTable({ subNav, setGetPay, setInvoice, invoice }) {

    const [invoiceList, setInvoiceList] = useState([])

    function handlePay(id) {
        setGetPay(true)
        const getInvoice = invoiceList.filter(item => item.id === id)[0]
        setInvoice({ ...getInvoice, payment: "cash", cash: 0, credit: 0, invoice: "false" })
    }

    function handleEdit(id) {
        const db = getDatabase()
        const invoiceRef = ref(db, 'invoices/' + id);
        const getInvoice = invoiceList.filter(item => item.id === id)[0]
        set(ref(db, "workorders/" + id), { ...getInvoice, status: "workorder-garage" })
        set(invoiceRef, null)
    }

    useEffect(() => {
        const db = getDatabase()
        const invoicesListRef = ref(db, 'invoices/');
        onValue(invoicesListRef, (snapshot) => {
            const data = snapshot.val();
            const list = []
            for (let job in data) {
                data[job].id = job
                list.push(data[job])
            }
            setInvoiceList(list.filter(invoice => invoice.status === "invoice-" + subNav))
        });
    }, [subNav])

    return (
        <Card className="m-0">
            <Table size="sm" className="m-0">
                <thead className="bg-light">
                    <tr className="">
                        <th>Contact</th>
                        <th>Vehicle</th>
                        <th>Services</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {invoiceList.map((invoice, index) => {
                        return (
                            <tr key={index} className="align-middle">
                                <td className="py-3 ps-2">
                                    <div>
                                        {invoice.fullName}
                                    </div>
                                    <div>
                                        {invoice.phone}
                                    </div>
                                    <div className="mt-2">
                                        <Button className="p-0 m-0" size="sm" variant="link" onClick={() => handleEdit(invoice.id)}>Send back to W.O.</Button>
                                    </div>
                                </td>
                                <td>{invoice.vehicle} {invoice.plate}</td>
                                <td>
                                    <ol className="m-0">
                                        {invoice.services.map(service => {
                                            return (
                                                <li>{service.description} {service.price > 0 && "($" + service.price + ")"} </li>
                                            )
                                        })}
                                    </ol>
                                </td>
                                <td>{"$" + parseFloat(invoice.total).toFixed(2)}</td>
                                <td >
                                    <div className="d-flex justify-content-end ">
                                        <Button size="sm" variant="link" className="text-dark" onClick={() => handlePay(invoice.id)}>Receive Payment</Button>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </Card>

    )
}

export default InvoicesTable
