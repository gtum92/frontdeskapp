import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap"
import NavBar from "./components/nav/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import RoutesList from "./RoutesList";

function App() {
  const [estimatesList, setEstimatesList] = useState([])
  const [workordersList, setWorkordersList] = useState([])
  const [declinedList, setDeclinedList] = useState([])

  return (
    <Container fluid className="App">
      <Router>
        <Row>
          <Col className="p-0">
            <NavBar />
          </Col>
        </Row>
        <Container fluid className="">
          <Row className="mt-4">
            <Col>
              <RoutesList
                estimatesList={estimatesList}
                setEstimatesList={setEstimatesList}
                workordersList={workordersList}
                setWorkordersList={setWorkordersList}
                declinedList={declinedList}
                setDeclinedList={setDeclinedList}
              />
            </Col>
          </Row>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
