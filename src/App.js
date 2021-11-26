import { Col, Container, Row } from "react-bootstrap"
import NavBar from "./components/nav/NavBar";
import { BrowserRouter as Router } from "react-router-dom";

import RoutesList from "./RoutesList";

function App() {
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
              <RoutesList />
            </Col>
          </Row>
        </Container>
      </Router>
    </Container>
  );
}

export default App;
