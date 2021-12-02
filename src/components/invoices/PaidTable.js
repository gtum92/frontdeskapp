import React, { useState, useEffect } from 'react'
import { Table, Card, Button, Badge } from 'react-bootstrap'
import { getDatabase, ref, onValue, set } from "firebase/database";

function PaidTable({ subNav }) {

    const [invoiceList, setInvoiceList] = useState([])

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
            console.log(list)
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
                        <th>Date Paid</th>
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
                                <td><Badge className="bg-success">{new Date(invoice.datePaid).toLocaleDateString()}</Badge></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>

        </Card>
    )
}

export default PaidTable
