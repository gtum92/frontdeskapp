import { Routes, Route } from "react-router-dom";

import React from 'react'
import EstimatesPage from "./pages/EstimatesPage";

function RoutesList() {
    return (
        <Routes>
            <Route path="/estimates" element={<EstimatesPage />} />
        </Routes>
    )
}

export default RoutesList
