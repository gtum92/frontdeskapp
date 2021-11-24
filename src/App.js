import { Col, Container, Row } from "react-bootstrap"
import NavBar from "./components/nav/NavBar";

import EstimatesPage from "./pages/EstimatesPage";

function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col className="p-0">
          <NavBar />
        </Col>
      </Row>
      <Container fluid>
        <Row className="mt-4">
          <Col>
            <EstimatesPage />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
