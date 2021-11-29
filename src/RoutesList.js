import { Routes, Route } from "react-router-dom";

import React from 'react'
import EstimatesPage from "./pages/EstimatesPage";
import WorkordersPage from "./pages/WorkordersPage";


function RoutesList({ estimatesList, setEstimatesList, workordersList, setWorkordersList, setDeclinedList, declinedList }) {
    return (
        <Routes>
            <Route
                path="/estimates"
                element={
                    <EstimatesPage
                        estimatesList={estimatesList}
                        setEstimatesList={setEstimatesList}
                        declinedList={declinedList}
                        setDeclinedList={setDeclinedList}
                        setWorkordersList={setWorkordersList}
                        workordersList={workordersList}
                    />
                }
            />
            <Route
                path="/workorders"
                element={
                    <WorkordersPage
                        workordersList={workordersList}
                        setWorkordersList={setWorkordersList}
                    />
                }
            />
        </Routes>
    )
}

export default RoutesList
