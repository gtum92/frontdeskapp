import { Routes, Route } from "react-router-dom";

import React from 'react'
import EstimatesPage from "./pages/EstimatesPage";
import WorkordersPage from "./pages/WorkordersPage";
import InvoicesPage from "./pages/InvoicesPage";



function RoutesList() {
    return (
        <Routes>
            <Route
                path="/estimates"
                element={<EstimatesPage />}
            />
            <Route
                path="/workorders"
                element={<WorkordersPage />}
            />
            <Route
                path="/invoices"
                element={<InvoicesPage />}
            />
        </Routes>
    )
}

export default RoutesList
