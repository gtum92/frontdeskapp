import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import { getDatabase, ref, onValue } from "firebase/database";

function InvoicesTable({ subNav, setGetPay, setInvoice }) {

    const [invoiceList, setInvoiceList] = useState([])

    function handlePay(id) {
        setGetPay(true)
        const getInvoice = invoiceList.filter(item => item.id === id)[0]
        setInvoice({ ...getInvoice, payment: "cash", cash: 0, credit: 0, invoice: "false" })
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
        <Table size="sm" striped>
            <thead>
                <tr>
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
                            <td>
                                <div>
                                    {invoice.fullName}
                                </div>
                                <div>
                                    {invoice.phone}
                                </div>
                            </td>
                            <td>{invoice.vehicle} {invoice.plate}</td>
                            <td>
                                <ol>
                                    {invoice.services.map(service => {
                                        return (
                                            <li>{service.description} {service.price > 0 && "($" + service.price + ")"} </li>
                                        )
                                    })}
                                </ol>
                            </td>
                            <td>{"$" + parseInt(invoice.total).toFixed(2)}</td>
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
    )
}

export default InvoicesTable
